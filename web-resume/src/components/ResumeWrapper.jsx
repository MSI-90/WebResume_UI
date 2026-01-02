import './ResumeWrapper.css';
import StepButton from "./StepButton";

export default function ResumeWrapper({ activeSection, setActiveSection }) {
  return (
    <>
      <div className="resume-wrapper">
        <div className="resume-items">
          <h3>Создайте своё резюме</h3>
          <StepButton id="fio" number="1" text="ФИО и фото" activeSection={activeSection} onClick={setActiveSection} />
          <StepButton id="contacts" number="2" text="Контактная информация" activeSection={activeSection} onClick={setActiveSection} />
          <StepButton id="goal" number="3" text="Цель резюме" activeSection={activeSection} onClick={setActiveSection} />
          <StepButton id="JobInfo" number="4" text="Информация о должности" activeSection={activeSection} onClick={setActiveSection} />
          <StepButton id="Personalinfo" number="5" text="Личная информация" activeSection={activeSection} onClick={setActiveSection} />
          <StepButton id="Experience" number="6" text="Опыт работы" activeSection={activeSection} onClick={setActiveSection} />
          <StepButton id="Education" number="7" text="Образование" activeSection={activeSection} onClick={setActiveSection} />
          <StepButton id="Couses" number="8" text="Курсы и тренинги" activeSection={activeSection} onClick={setActiveSection} />
          <StepButton id="Lessons" number="9" text="Знание языков" activeSection={activeSection} onClick={setActiveSection} />
          <StepButton id="Skills" number="10" text="Навыки" activeSection={activeSection} onClick={setActiveSection} />
          <StepButton id="AdditioanlInfo" number="11" text="Дополнительная информация" activeSection={activeSection} onClick={setActiveSection} />
          <StepButton id="ProjectInfo" number="12" text="Портфолио" activeSection={activeSection} onClick={setActiveSection} />
        </div>
      </div>
    </>
  )
}