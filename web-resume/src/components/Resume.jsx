import './Resume.css';
import ResumeWrapper from './ResumeWrapper';
import ItemContent from "./ItemContent";
import Dialog from "./Dialog";
import ResumeBackend from '../modules/resume';
import reducer from '../reducer';
import {useReducer, useState} from "react";

export default function Resume({visible}) {
  const [activeSection, setActiveSection] = useState('fio');
  const [dialog, setDialog] = useState(false);
  const [error, setError] = useState([]);

  let initialFormData = {
    // TODO: шаблон templateId стоит костыльно, пока что пусть так, после рассмотреть вопрос его установки в зависимости от типа (аккаунта или разовой акции?)
    templateId: 'db58c76e-bcb5-4c6a-ad60-0e61bf3ac11c',

    firstName: '',
    lastName: '',
    fatherName: '',
    photo: null,
    photoLink: '',

    phone: null,
    email: '',
    socialType: 0,
    socialLink: '',

    goal: '',

    jobTitle: '',
    desiredSalary: '',
    currency: 810,
    byAgreement: false,
    employmentType: 0,
    workSchedule: 0,

    city: '',
    isDualCitizenship: false,
    dateOfBirth: 1,
    monthOfBirth: 1,
    yearOfBirth: new Date().getFullYear(),
    moving: 0,
    sex: 0,
    marital: 0,
    citizenship: '1cbca6a4-dfbc-4d90-9758-0e87a66293b9',
    children: false,
  };

  const[newFormData, dispatchResume] = useReducer(reducer, initialFormData);

  // TODO: убрать отладочный вывод в консоль
  const submitForm = async(e) => {
      e.preventDefault();
      try{
        const resume = new ResumeBackend(newFormData);
        const newResume = await resume.postResume();
        console.log(newResume);
      } catch (error) {
        setError(error);
        setDialog(true);
        console.log(error);
      }
  }

  return (
    visible && (
    <>
      <div className="resume">
        <ResumeWrapper activeSection={activeSection} setActiveSection={setActiveSection} />
        <form className="resume-form" onSubmit={submitForm}>
          <ItemContent activeSection={activeSection} formData={newFormData} dispatch={dispatchResume} />
          <button type='submit'>Отправить</button>
        </form>
      </div>
      {dialog && <Dialog
        header="Возникла ошибка"
        modal={true}
        onAction={(type) => {
          setDialog(false);
        }}>
        {error}
      </Dialog>}
    </>)
  )
}