import './Goal.css';
import {useState} from 'react'

export default function Goal({formData, dispatch}) {
  const [goal, setGoal] = useState(false);

  const maxLengthValue = 500;

  const goalChange = () =>
    setGoal(prev => !prev);

  return (
    <>
      <div className="purpose-resume" id="item-purpose">
        <div className="item-main-header">
          <h3>Цель резюме</h3>
        </div>
        {!goal ? (
          <div>
            <article>
              <p>
                Цель резюме — это короткий блок в начале резюме, где ты в 1–3 предложениях объясняешь,
                какую позицию ищешь и какую пользу принесёшь работодателю.
              </p>
            </article>
            <ul>
              <li>Помогает рекрутеру сразу понять, кто ты</li>
              <li>Выделяет резюме среди похожих</li>
              <li>Задаёт контекст всему остальному резюме</li>
            </ul>
            <span>Может помочь, если:</span>
            <ul>
              <li>Мало опыта</li>
              <li>Меняешь профессию</li>
              <li>Откликаешься на конкретную вакансию</li>
            </ul>
          </div>
          ) : (
          <div className="item-purpose-body">
            <label htmlFor="purpose"></label>
            <div className="textarea-wrapper">
              <textarea
                id="purpose"
                name="goal"
                spellCheck="true"
                maxLength={maxLengthValue}
                value={formData.goal}
                placeholder={`Введите не более ${maxLengthValue} символов`}
                onChange={(event) => dispatch({
                  type: 'change-goal',
                  payload: {field:event.target.name, value: event.target.value},
                })}>
              </textarea>
              <div className="char-counter">
                {formData.goal.length}/{maxLengthValue}
              </div>
            </div>
          </div>
        )}
        <button type='button' onClick={() => goalChange()}>{goal ? 'Удалить текст для цель резюме' :'Добавить текст для цели резюме'}</button>
      </div>
    </>
  )
}