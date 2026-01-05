import './Goal.css';

export default function Goal() {
  return (
    <>
      <div data-section="purpose-resume" id="item-purpose" className="section item-hidden">
        <div className="item-main-header">
          <h3>Цель резюме</h3>
        </div>
        <div className="item-purpose-body">
          <label htmlFor="purpose"></label>
          <textarea id="purpose" spellCheck="true"></textarea>
        </div>
      </div>
    </>
  )
}