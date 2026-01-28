import './Experience.css';
import {useState, useEffect, useReducer} from "react";
import PersonalInfo from "../modules/personal";
import experienceReducer from "../reducers/experienceReducer";
import ExperienceSavedItem from "./ExperienceSavedItem";
import ExperienceForm from "./ExperienceForm";

const dateFromPersonalInfo = async () =>
  await new PersonalInfo().getBirthday();

export default function Experience({formData, formDispatch}) {
  const [asAccordion, setAsAccordion] = useState(false);
  const [dateList, setDateList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [workNow, setWorkNow] = useState(false);
  const [expItem, setExpItem] = useState([]);

  const initialExperienceItem = {
    id: null,
    company: '',
    jobTitle: '',
    periodStartMonth: '1',
    periodStartMonthName: 'Январь',
    periodStartYear: new Date().getFullYear().toString(),
    periodEndMonth: '1',
    periodEndMonthName: 'Январь',
    periodEndYear: new Date().getFullYear().toString(),
    jobResponsibilities: '',
    jobAchievements: '',
    workNow: false,
  }
  const [newExperienceItemState, dispatchExperienceItem] = useReducer(experienceReducer, initialExperienceItem);

  useEffect(() => {
    let isMounted = true;

    (async() => {
      try {
        const date = await dateFromPersonalInfo();
        if(isMounted)
          setDateList(date);

      } catch (error) {
        setError(true);
      } finally {
        if (isMounted)
          setLoading(false);
      }

    })()
    return () => {
      isMounted = false;
    };
  }, [])

  const saveExperience = () => {
    setAsAccordion(prev => !prev);
    experienceCollection(newExperienceItemState);
  }

  const experienceCollection = (experienceItemState) => {
    setExpItem(prev => {
      if (!Array.isArray(prev)) return [];

      // проверим на пустые поля Компания и должность
      const emptyFields = verifyFields(experienceItemState);

      // добавление
      if (!experienceItemState.id) {
        return [
          ...prev, {
          ...experienceItemState,
          ...emptyFields,
            id: crypto.randomUUID(),
          },
        ];
      }

      // редактирование
      return prev.map(item =>
        item.id === experienceItemState.id
          ? {
            ...experienceItemState,
            ...emptyFields}
          : item);
    });

    setAsAccordion(true);
  }

  const verifyFields = (experienceItemState) => {
    return {
      company: experienceItemState.company === '' ? 'Наименование организации не указано' : experienceItemState.company,
      jobTitle: experienceItemState.jobTitle === '' ? 'Должность не указана' : experienceItemState.jobTitle
    }
  }

  const addExperience = () => {
    dispatchExperienceItem({
      type: 'reset',
      payload: initialExperienceItem
    });

    setWorkNow(false);
    setAsAccordion(false);
  }

  const changeWorkNow = (event) => {
    const checked = event.target.checked;
    setWorkNow(checked);
    dispatchExperienceItem({
      type: 'workNow',
      payload: checked,
    })
  }

  const editItem = (itemId) => {
    const result = expItem.find(item => item.id === itemId);
    if (result){
      dispatchExperienceItem({
        type: 'editItem',
        payload: result,
      })

      setWorkNow(result.workNow || false);
      setAsAccordion(false);
    }
  }

  const deleteItem = (itemId) => {
    setExpItem(prev => prev.filter(item => item.id !== itemId));
  }

  const clearForm = () =>{
    setWorkNow(false);
    dispatchExperienceItem({
      type: 'clearForm',
      payload: initialExperienceItem,
    })
  }


  const ExpFormProps = {
    asAccordion,
    newExperienceItemState,
    dispatchExperienceItem,
    dateList,
    workNow,
    changeWorkNow,
    saveExperience,
    clearForm,
    addExperience
  }

  if (loading) {
    return(
      <>
        <div className="loader">Ожидание данных...</div>
      </>
    )
  }

  if (error) {
    return (
      <>
        <span className="error">
          Ошибка сети, ответственные уже занимаются решением этого вопроса,
          повторите попытку позднее...
        </span>
      </>
    );
  }

  return (
    <>
      <div className="experience">
        <div className="item-main-header">
          <h3>Опыт работы</h3>
        </div>

        {expItem?.length > 0 && (
          <ExperienceSavedItem
            expItem={expItem}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        )}

        <ExperienceForm {...ExpFormProps} />
      </div>
    </>
  )
}