import './Personal.css';

export default function Personal({formData, onFieldChange}) {
  return (
    <>
      <div data-section="personal-info" id="item-personal" className="section item-hidden">
        <div className="item-main-header">
          <h3>Личная информация</h3>
        </div>
        <div className="item-personal-body">
          <div>
            <label htmlFor="city">Город проживания</label><br/>
            <input type="text" id="city" spellCheck="false"/>
          </div>
          <div>
            <label htmlFor="birthday-day">Дата рождения</label><br/>
            <div className="birthday-selectors">
              <select id="birthday-day" required spellCheck="false">
                <option>31</option>
              </select>
              <select id="birthday-month" required spellCheck="false">
                <option>Январь</option>
              </select>
              <select id="birthday-year" required spellCheck="false">
                <option>1990</option>
              </select>
            </div>
          </div>
          <div>
            <br/>
            <label htmlFor="moving">Переезд</label><br/>
            <select id="moving" spellCheck="false">
              <option>Нежелателен</option>
            </select>
          </div>
          <div>
            <br/>
            <label htmlFor="sex">Пол</label><br/>
            <select id="sex" spellCheck="false">
              <option>Женский</option>
            </select>
          </div>
          <div>
            <br/>
            <label htmlFor="citizenship">Гражданство</label><br/>
            <select id="citizenship" spellCheck="false">
              <option>Российская Федерация</option>
            </select>
          </div>
          <div>
            <br/>
            <label htmlFor="marital-status">Семейное положение</label><br/>
            <select id="marital-status" spellCheck="false">
              <option>Не замужем</option>
            </select>
          </div>
          <div>
            <div className="toggle-switch">
              <input type="checkbox" id="hasChildren" className="toggle-input"/>
              <label htmlFor="hasChildren" className="toggle-label"></label>
              <span>У меня есть дети</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}