import './Experience.css';
import {useState, useEffect} from "react";
import classNames from "classnames";
import PersonalInfo from "../modules/personal";

const dateFromPersonalInfo = async () =>
  await new PersonalInfo().getBirthday();

export default function Experience({formData, dispatch}) {
  const [asAccordion, setAsAccordion] = useState(false);
  const [dateList, setDateList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [workNow, setWorkNow] = useState(false);
  const [expItem, setExpItem] = useState([]);

  useEffect(() => {
    let isMounted = true;

    (async() => {
      try {
        const date = await dateFromPersonalInfo();
        if(isMounted)
          setDateList(date);

      } catch (error) {
        setError(pref => !pref);
      } finally {
        if (isMounted)
          setLoading(false);
      }

    })()
    return () => {
      isMounted = false;
    };
  }, [])

  const experienceCollection = (experienceItem) => {
    const expItem = {

    }
  }

  if (loading) {
    return(
      <>
        <div className="loader">Ожидание данных...</div>
      </>
    )
  }

  if (error) {
    return (
      <>
        <span className="error">
          Ошибка сети, ответственные уже занимаются решением этого вопроса,
          повторите попытку позднее...
        </span>
      </>
    );
  }

  return (
    <>
      <div className="experience">
        <div className="item-main-header">
          <h3>Опыт работы</h3>
        </div>
        <div className="item-experience-body">
          <div className={classNames({'accord': asAccordion})}>
            <div>
              <label htmlFor="company">Компания</label><br/>
              <input
                type="text"
                name="company"
                id="company"
                spellCheck="false"
              />
            </div>
            <br/>
            <div>
              <label htmlFor="job-title">Занимаемая должность</label><br/>
              <input
                type="text"
                name="job-title"
                id="job-title"
                spellCheck="false"
              />
            </div>
            <div className="period">
              <div className="item-1">
                <label htmlFor="period-start-month">Начало работы</label><br/>
                <select
                  id="period-start-month"
                  required>
                  name="period-start-month"
                  {Array.isArray(dateList?.months) && dateList?.months.length > 0 &&
                    dateList?.months.map((item) => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))
                  }
                </select>
                <select
                  id="period-start-year"
                  required>
                  name="period-start-year"
                  {Array.isArray(dateList?.years) && dateList?.years.length > 0 &&
                    dateList?.years.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))
                  }
                </select>
              </div>
              <div className="item-2">
                <div id="label-end">
                  <label htmlFor="period-end-month">Окончание</label>
                </div>
                <div className="clear"></div>
                <select
                  id="period-end-month"
                  name="period-end-month"
                  disabled={workNow}>
                  {Array.isArray(dateList?.months) && dateList?.months.length > 0 &&
                    dateList?.months.map((item) => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))
                  }
                </select>
                <select
                  id="period-end-year"
                  name="period-end-year"
                  disabled={workNow}>
                  {Array.isArray(dateList?.years) && dateList?.years.length > 0 &&
                    dateList?.years.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))
                  }
                </select>
              </div>
            </div>
            <div id="job-now-container">
              <div className="toggle-switch">
                <input type="checkbox" id="job-now" className="toggle-input" onChange={(event)=>{
                  setWorkNow(event.target.checked);
                }}/>
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
              <button
                type="button"
                className="save-button"
                onClick={() => {setAsAccordion(prev => !prev)}}>
                Сохранить
              </button>
              <button type={"button"} className="remove-button">Удалить</button>
            </div>

          </div>
          <div className="add-experience">
            <button type={"button"} className="add-button">Добавить</button>
          </div>
        </div>
      </div>
    </>
  )
}