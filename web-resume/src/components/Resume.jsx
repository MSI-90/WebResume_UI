import './Resume.css';
import ResumeWrapper from './ResumeWrapper';
import ItemContent from "./ItemContent";
import ResumeBackend from './modules/resume';
import {useState} from "react";

export default function Resume({visible}) {
  const [activeSection, setActiveSection] = useState('fio');
  const [formData, setFormData] = useState({
    // TODO: шаблон templateId стоит костыльно, пока что пусть так, после рассмотреть вопрос его установки в зависимости от типа (аккаунта или разовой акции?)
    templateId: 'db58c76e-bcb5-4c6a-ad60-0e61bf3ac11c',
    firstName: '',
    lastName: '',
    fatherName: '',
    photo: null,
    tel: '',
    email: '',
    socialType: null,
    socialLink: '',
    goal: '',
    jobTitle: '',
    desiredSalary: '',
    currency: 810,
    byAgreement: false,
    employmentType: '',
    workSchedule: '',

    city:'',
    isDualCitizenship: false,
    dateOfBirth: '',
    monthOfBirth: '',
    yearOfBirth: new Date().getFullYear(),
    moving: '',
    sex: '',
    marital: '',
    citizenship: '1cbca6a4-dfbc-4d90-9758-0e87a66293b9',
    children: false
  });

  const handleInputChange = (field) => (e) => {
    if (e.target.type === 'file') {
      setFormData(prev => ({ ...prev, [field]: e.target.files[0] }));
    } else if (e.target.type === 'checkbox') {
      setFormData(prev => ({ ...prev, [field]: e.target.checked }));
    } else {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
    }
  };

  // TODO: убрать отладочный вывод в консоль
  const submitForm = async(e) => {
      e.preventDefault();
      try{
        const resume = new ResumeBackend(formData);
        const newResume = await resume.postResume();
        console.log(newResume);
      } catch (error) {
        console.log(error.response);
      }
  }

  return (
    visible && (
    <>
      <div className="resume">
        <ResumeWrapper activeSection={activeSection} setActiveSection={setActiveSection} />
        <form className="resume-form" onSubmit={submitForm}>
          <ItemContent activeSection={activeSection} formData={formData} onFieldChange={handleInputChange} />
          <button type='submit'>Отправить</button>
        </form>
      </div>
    </>)
  )
}