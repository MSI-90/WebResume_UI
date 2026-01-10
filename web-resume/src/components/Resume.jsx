import './Resume.css';
import ResumeWrapper from './ResumeWrapper';
import ItemContent from "./ItemContent";
import {useState} from "react";

// TODO: тестовая функция получения данных формы из компонентов для их будущей отправки на сервер.
const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const fioData = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    fatherName: formData.get('fatherName'),
    photo: formData.get("photo")
  }

  console.log(fioData);

  // const data = Object.fromEntries(formData.entries());
  // console.log('Все данные резюме:', data);
}

export default function Resume({visible}) {
  const [activeSection, setActiveSection] = useState('fio');
  return (
    visible && (
    <>
      <div className="resume">
        <ResumeWrapper activeSection={activeSection} setActiveSection={setActiveSection} />
        <form className="resume-form" onSubmit={handleSubmit}>
          <ItemContent activeSection={activeSection} />
          <button type='submit'>Отправить</button>
        </form>
      </div>
    </>)
  )
}