import './ResumeWrapper.css';
import StepButton from "./StepButton";

export default function ResumeWrapper({ activeSection, setActiveSection }) {
  return (
    <>
      <div className="resume-wrapper">
        <div className="resume-items">
          <h3>Создайте своё резюме</h3>
          <StepButton id="fio" number="1" text="ФИО и фото" activeSection={activeSection} onClick={setActiveSection} />
          <StepButton id="contact" number="2" text="Контактная информация" activeSection={activeSection} onClick={setActiveSection} />
          <StepButton id="goal" number="3" text="Цель резюме" activeSection={activeSection} onClick={setActiveSection} />
          <StepButton id="jobInfo" number="4" text="Информация о должности" activeSection={activeSection} onClick={setActiveSection} />
          <StepButton id="personalinfo" number="5" text="Личная информация" activeSection={activeSection} onClick={setActiveSection} />
          <StepButton id="experience" number="6" text="Опыт работы" activeSection={activeSection} onClick={setActiveSection} />
          <StepButton id="education" number="7" text="Образование" activeSection={activeSection} onClick={setActiveSection} />
          <StepButton id="couses" number="8" text="Курсы и тренинги" activeSection={activeSection} onClick={setActiveSection} />
          <StepButton id="languages" number="9" text="Знание языков" activeSection={activeSection} onClick={setActiveSection} />
          <StepButton id="skills" number="10" text="Навыки" activeSection={activeSection} onClick={setActiveSection} />
          <StepButton id="additionalInfo" number="11" text="Дополнительная информация" activeSection={activeSection} onClick={setActiveSection} />
          <StepButton id="projectInfo" number="12" text="Портфолио" activeSection={activeSection} onClick={setActiveSection} />
        </div>
      </div>
    </>
  )
}