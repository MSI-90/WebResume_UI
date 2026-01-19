import './Experience.css';

export default function Experience({formData, onFieldChange}) {
  return (
    <>
      <div className="experience" id="item-experience">
        <div className="item-main-header">
          <h3>Опыт работы</h3>
        </div>
        <div className="item-experience-body">
          <div>
            <label htmlFor="company">Компания</label><br/>
            <input type="text" id="company" spellCheck="false"/>
          </div>
          <br/>
          <div>
            <label htmlFor="job-title">Занимаемая должность</label><br/>
            <input type="text" id="job-title" spellCheck="false"/>
          </div>
          <div className="period">
            <div className="item-1">
              <label htmlFor="period-start-month">Начало работы</label><br/>
              <select id="period-start-month" required>
                <option>Май</option>
                <option>Сентябрь</option>
              </select>
              <select id="period-start-year" required>
                <option>2025</option>
              </select>
            </div>
            <div className="item-2">
              <div id="label-end">
                <label htmlFor="period-end-month">Окончание</label>
              </div>
              <div className="clear"></div>
              <select id="period-end-month">
                <option>Июль</option>
                <option>Сентябрь</option>
              </select>
              <select id="period-end-year">
                <option>2025</option>
              </select>
            </div>
          </div>
          <div id="job-now-container">
            <div className="toggle-switch">
              <input type="checkbox" id="job-now" className="toggle-input"/>
              <label htmlFor="job-now" className="toggle-label"></label>
              <span>Работаю сейчас</span>
            </div>
          </div>
          <div id="job-responsibilities-container">
            <label htmlFor="job-responsibilities">Должностные обязанности на занимаемой должности</label>
            <textarea spellCheck="false" id="job-responsibilities"></textarea>
          </div>
          <div id="job-achievements-container">
            <label htmlFor="job-achievements">Достижения</label>
            <textarea spellCheck="false" id="job-achievements"></textarea>
          </div>
          <div className="button-group">
            <button className="save-button">Сохранить</button>
            <button className="remove-button">Удалить</button>
            <div className="add-experience">
              <button className="add-button">Добавить</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}