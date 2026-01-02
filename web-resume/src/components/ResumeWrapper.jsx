import './ResumeWrapper.css';

export default function ResumeWrapper() {
  return (
    <>
      <div className="resume-wrapper">
        <div className="resume-items">
          <h3>Создайте своё резюме</h3>
          <button data-target="fio">
            <span className="round-number">1</span>
            <span className="item-step-button-preview">ФИО и фото</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
            <span className="clear"></span>
          </button>
          <button data-target="contact">
            <span className="round-number">2</span>
            <span className="item-step-button-preview">Контактная информация</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
            <span className="clear"></span>
          </button>
          <button data-target="purpose-resume">
            <span className="round-number">3</span>
            <span className="item-step-button-preview">Цель резюме</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
            <span className="clear"></span>
          </button>
          <button data-target="job-info">
            <span className="round-number">4</span>
            <span className="item-step-button-preview">Информация о должности</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
            <span className="clear"></span>
          </button>
          <button data-target="personal-info">
            <span className="round-number">5</span>
            <span className="item-step-button-preview">Личная информация</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
            <span className="clear"></span>
          </button>
          <button data-target="experience">
            <span className="round-number">6</span>
            <span className="item-step-button-preview">Опыт работы</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
            <span className="clear"></span>
          </button>
          <button data-target="education">
            <span className="round-number">7</span>
            <span className="item-step-button-preview">Образование</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
            <span className="clear"></span>
          </button>
          <button data-target="courses">
            <span className="round-number">8</span>
            <span className="item-step-button-preview">Курсы и тренинги</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
            <span className="clear"></span>
          </button>
          <button data-target="languages">
            <span className="round-number">9</span>
            <span className="item-step-button-preview">Знание языков</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
            <span className="clear"></span>
          </button>
          <button data-target="skills">
            <span className="round-number-2">10</span>
            <span className="item-step-button-preview">Навыки</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
            <span className="clear"></span>
          </button>
          <button data-target="additional-info">
            <span className="round-number-2">11</span>
            <span className="item-step-button-preview">Дополнительная информация</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
            <span className="clear"></span>
          </button>
          <button data-target="portfolio">
            <span className="round-number-2">12</span>
            <span className="item-step-button-preview">Портфолио</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
            <span className="clear"></span>
          </button>
        </div>
      </div>
    </>
  )
}