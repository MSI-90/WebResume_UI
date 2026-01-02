import './Main.css';
import Resume from './Resume'

export default function Main() {
  return (
    <>
      <main>
        <div className="prestart-resume">
          <h1>Создайте профессиональное резюме онлайн</h1>
          <h3>Соберите его пошагово — просто, быстро и без лишних усилий.</h3>
          <button id="get-builder">
            <span className="get-start">Приступим</span>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </main>
      <Resume />
    </>
  )
}