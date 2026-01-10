import './Resume.css';
import ResumeWrapper from './ResumeWrapper';
import ItemContent from "./ItemContent";
import {useState, useEffect} from "react";

export default function Resume({visible}) {
  const [activeSection, setActiveSection] = useState('fio');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    photo: null,
    tel: '',
    email: '',
    social: '',
    nick: ''
  });

  const handleInputChange = (field) => (e) => {
    if (e.target.type === 'file') {
      setFormData(prev => ({ ...prev, [field]: e.target.files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
    }
  };

  useEffect(() => {
    console.log('formData:', formData);
  }, [formData]);

  return (
    visible && (
    <>
      <div className="resume">
        <ResumeWrapper activeSection={activeSection} setActiveSection={setActiveSection} />
        <form className="resume-form">
          <ItemContent activeSection={activeSection} formData={formData} onFieldChange={handleInputChange} />
          <button type='submit'>Отправить</button>
        </form>
      </div>
    </>)
  )
}