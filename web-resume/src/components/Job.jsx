import './Job.css';
import JobData from './modules/job';
import {useEffect, useState} from "react";

// TODO: Добавить стилизацию options внутри select-ов
// TODO: Проанализировать дополнительно логику функций для вызова методов класса работы с API - job
async function getCurrency(){
  const jobData = new JobData();
  return await jobData.getCurrency();
}

async function getWorkSchedule() {
  const jobData = new JobData();
  return await jobData.getWorkSchedule();
}

async function getEmploymentType() {
  const jobData = new JobData();
  return await jobData.getEmploymentType();
}

export default function Job() {
  const [currencyList, setCurrencyList ] = useState([]);
  const [workSchedule, setWorkSchedule] = useState([]);
  const [employmentType, setEmploymentType] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getAllJobData = (currency, workSchedule, employmentType) => {
      setCurrencyList(currency);
      setWorkSchedule(workSchedule);
      setEmploymentType(employmentType);
  }

  useEffect(()=>{
    let isMounted = true;

    (async () => {
      try {
        const [currency, workSchedule, employmentType] =
          await Promise.all([
          getCurrency(),
          getWorkSchedule(),
          getEmploymentType()
        ]);

        if(isMounted){
          getAllJobData(currency, workSchedule, employmentType);
        }
      } catch (error) {
        setError(true);
      } finally {
        if(isMounted)
          setLoading(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [])

  if (loading) {
    return (
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
      <div data-section="job-info" id="item-job" className="section item-hidden">
        <div className="item-main-header">
          <h3>Желаемая должность</h3>
        </div>
        <div className="item-job-body">
          <div>
            <label htmlFor="job">Должность</label><br/>
            <input type="text" id="job" spellCheck="false"/>
          </div>
          <br/>
          <div className="desired-job-info">
            <div>
              <label htmlFor="amount">Желаемая зарплата</label><br/>
              <input type="number" id="amount" spellCheck="false"/>
            </div>
            <div>
              <label htmlFor="currency">Валюта</label><br/>
              <select id="currency">
                { Array.isArray(currencyList) && currencyList.length > 0 &&
                  currencyList.map((item) => (
                  <option key={item.currencyCode} value={item.currencyCode}>{item.currencyNameRu}</option>
                ))}
              </select>
            </div>
            <div className="agreement">
              <label className="agreement-label">По договорённости</label>
              <label className="checkbox-wrapper">
                <input type="checkbox" id="by-agreement"/>
                <span className="checkmark"></span>
              </label>
            </div>
            <div>
              <br/>
              <label htmlFor="employment-type">Тип занятости</label><br/>
              <select id="employment-type">
                { Array.isArray(employmentType) && employmentType.length > 0 &&
                  employmentType.map((item) => (
                    <option key={item.id} value={item.id}>{item.employmentTypeNameRu}</option>
                  ))}
              </select>
            </div>
            <div>
              <br/>
              <label htmlFor="work-schedule">График работы</label><br/>
              <select id="work-schedule" spellCheck="false">
                { Array.isArray(workSchedule) && workSchedule.length > 0 &&
                  workSchedule.map((item) => (
                    <option key={item.id} value={item.id}>{item.workScheduleNameRu}</option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}