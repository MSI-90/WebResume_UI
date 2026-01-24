import './Experience.css';
import {useState, useEffect, useReducer} from "react";
import classNames from "classnames";
import PersonalInfo from "../modules/personal";
import experienceReducer from "../reducers/experienceReducer";

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
    company: '',
    jobTitle: '',
    periodStartMonth: '1',
    periodStartYear: new Date().getFullYear().toString(),
    periodEndMonth: '1',
    periodEndYear: new Date().getFullYear().toString(),
    jobResponsibilities: '',
    jobAchievements: '',
  }
  const [newExperienceItemState, dispatchExperienceItem] = useReducer(experienceReducer, initialExperienceItem);

  // TODO: снести после реализации
  useEffect(() => {
    console.log(newExperienceItemState);
  },[newExperienceItemState])

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
    experienceCollection(newExperienceItemState)
  }

  const experienceCollection = (experienceItemState) => {
    const expItem = []
  }

  const changeWorkNow = (event) => {
    const checked = event.target.checked;
    setWorkNow(checked);
    dispatchExperienceItem({
      type: 'workNow',
      payload: checked,
    })
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
        <div className="item-experience-body">
          <div className={classNames({'accord': asAccordion})}>
            <div>
              <label htmlFor="company">Компания</label><br/>
              <input
                type="text"
                name="company"
                id="company"
                spellCheck="false"
                onChange={(event)=>
                  dispatchExperienceItem({
                    type: 'company',
                    payload: event.target.value
                  })
                }
              />
            </div>
            <br/>
            <div>
              <label htmlFor="job-title">Занимаемая должность</label><br/>
              <input
                type="text"
                id="job-title"
                name="jobTitle"
                spellCheck="false"
                onChange={(event)=>
                  dispatchExperienceItem({
                    type: 'jobTitle',
                    payload: event.target.value
                  })
                }
              />
            </div>
            <div className="period">
              <div className="item-1">
                <label htmlFor="period-start-month">Начало работы</label><br/>
                <select
                  id="period-start-month"
                  required
                  name="periodStartMonth"
                  value={newExperienceItemState.periodStartMonth}
                  onChange={(event)=>
                    dispatchExperienceItem({
                      type: 'periodStartMonth',
                      payload: event.target.value
                    })}
                >
                  {Array.isArray(dateList?.months) && dateList?.months.length > 0 &&
                    dateList?.months.map((item) => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))
                  }
                </select>
                <select
                  id="period-start-year"
                  required
                  name="periodStartYear"
                  value={newExperienceItemState.periodStartYear}
                  onChange={(event)=>
                    dispatchExperienceItem({
                      type: 'periodStartYear',
                      payload: event.target.value
                    })
                  }
                >
                  {Array.isArray(dateList?.years) && dateList?.years.length > 0 &&
                    dateList?.years.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))
                  }
                </select>
              </div>
              <div className="item-2">
                <div id="label-end">
                  <label htmlFor="period-end-month">Окончание</label>
                </div>
                <div className="clear"></div>
                <select
                  id="period-end-month"
                  name="periodEndMonth"
                  disabled={workNow}
                  value={newExperienceItemState.periodEndMonth}
                  onChange={(event)=>
                  dispatchExperienceItem({
                    type: 'periodEndMonth',
                    payload: event.target.value
                  })}
                >
                  {Array.isArray(dateList?.months) && dateList?.months.length > 0 &&
                    dateList?.months.map((item) => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))
                  }
                </select>
                <select
                  id="period-end-year"
                  name="periodEndYear"
                  disabled={workNow}
                  value={newExperienceItemState.periodEndYear}
                  onChange={(event)=>
                  dispatchExperienceItem({
                    type: 'periodEndYear',
                    payload: event.target.value
                  })}
                >
                  {Array.isArray(dateList?.years) && dateList?.years.length > 0 &&
                    dateList?.years.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))
                  }
                </select>
              </div>
            </div>
            <div id="job-now-container">
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  id="job-now"
                  className="toggle-input"
                  onChange={(event)=>{
                    changeWorkNow(event);
                  }}
                />
                <label htmlFor="job-now" className="toggle-label"></label>
                <span>Работаю сейчас</span>
              </div>
            </div>
            <div id="job-responsibilities-container">
              <label htmlFor="job-responsibilities">Должностные обязанности на занимаемой должности</label>
              <textarea
                spellCheck="false"
                id="job-responsibilities"
                name="jobResponsibilities"
                onChange={(event)=>
                  dispatchExperienceItem({
                    type: 'jobResponsibilities',
                    payload: event.target.value
                  })}
                ></textarea>
            </div>
            <div id="job-achievements-container">
              <label htmlFor="job-achievements">Достижения</label>
              <textarea
                spellCheck="false"
                id="job-achievements"
                name="jobAchievements"
                onChange={(event) =>
                dispatchExperienceItem({
                  type: 'jobAchievements',
                  payload: event.target.value
                })}
              >
              </textarea>
            </div>
            <div className="button-group">
              <button
                type="button"
                className="save-button"
                onClick={() => {saveExperience()}}
              >
                Сохранить
              </button>
              <button type={"button"} className="remove-button">Удалить</button>
            </div>

          </div>
          <div className="add-experience">
            <button type={"button"} className="add-button">Добавить</button>
          </div>
        </div>
      </div>
    </>
  )
}