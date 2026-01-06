import './Goal.css';
import {useState} from 'react'

export default function Goal() {
  const [goal, setGoal] = useState(false);

  return (
    <>
      <div data-section="purpose-resume" id="item-purpose" className="section item-hidden">
        <div className="item-main-header">
          <h3>Цель резюме</h3>
        </div>
        {!goal && (
        <div>
          <article>
            Цель резюме — это короткий блок в начале резюме, где ты в 1–3 предложениях объясняешь,
            какую позицию ищешь и какую пользу принесёшь работодателю.
          </article>
        </div>)}
        {goal && (
        <div className="item-purpose-body">
          <label htmlFor="purpose"></label>
          <textarea id="purpose" spellCheck="true"></textarea>
        </div>)}
      </div>
    </>
  )
}