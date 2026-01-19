import './Personal.css';
import PersonalInfo from '../modules/personal';
import Citizenship from '../modules/citizenship';
import {useEffect, useState} from 'react'

async function getBirthday() {
  return await new PersonalInfo().getBirthday();
}

async function getMovingVariants() {
  return await new PersonalInfo().getMovingVariants();
}

async function getMaritalStatus(){
  return await new PersonalInfo().getMaritalStatus();
}

async function getSexVariants() {
  return await new PersonalInfo().getSexVariants();
}

async function getCitizenship() {
  return await new Citizenship().getCitizenship()
}

export default function Personal({formData, onFieldChange}) {
  const[birthday, setBirthday] = useState([]);
  const[movingVariant, setMovingVariant] = useState([]);
  const[sexVariant, setSexVariant] = useState([]);
  const[maritalStatus, setMaritalStatus] = useState([]);
  const[citizenship, setCitizenship] = useState([]);
  const[error, setError] = useState(false);
  const[loading, setLoading] = useState(true);

  function getAllPersonalData(birthday, movingVariant, sex, maritalStatus, citizenship) {
    setBirthday(birthday);
    setMovingVariant(movingVariant);
    setSexVariant(sex);
    setMaritalStatus(maritalStatus);
    setCitizenship(citizenship);
  }

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const[birthday, movingVariant, sex, maritalStatus, citizenship] =
          await Promise.all([
            getBirthday(),
            getMovingVariants(),
            getSexVariants(),
            getMaritalStatus(),
            getCitizenship()
          ]);
        if(isMounted){
          getAllPersonalData(birthday, movingVariant, sex, maritalStatus, citizenship);
        }
      } catch (error){
        setError(error);
      } finally {
        if (isMounted)
          setLoading(false);
      }
    })()

    return () => {
      isMounted = false;
    };

  }, [])

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
      <div data-section="personal-info" id="item-personal" className="section item-hidden">
        <div className="item-main-header">
          <h3>Личная информация</h3>
        </div>
        <div className="item-personal-body">
          <div>
            <label htmlFor="city">Город проживания</label><br/>
            <input type="text" id="city" spellCheck="false"
                   value={formData.city}
                   onChange={onFieldChange('city')} />
          </div>
          <div>
            <label htmlFor="birthday-day">Дата рождения</label><br/>
            <div className="birthday-selectors">
              <select id="birthday-day" required spellCheck="false"
                      value={formData.dateOfBirth}
                      onChange={onFieldChange('dateOfBirth')}>
                { Array.isArray(birthday.days) && birthday.days.length > 0 &&
                  birthday.days.map(item => (
                    <option key={item} value={item}>{item}</option>
                  ))
                }
              </select>
              <select id="birthday-month" required spellCheck="false"
                      value={formData.monthOfBirth}
                      onChange={onFieldChange('monthOfBirth')}>
                { Array.isArray(birthday.months) && birthday.months.length > 0 &&
                  birthday.months.map((item) => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))
                }
              </select>
              <select id="birthday-year" required spellCheck="false"
                      value={formData.yearOfBirth}
                      onChange={onFieldChange('yearOfBirth')}>
                { Array.isArray(birthday.years) && birthday.years.length > 0 &&
                  birthday.years.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))
                }
              </select>
            </div>
          </div>
          <div>
            <br/>
            <label htmlFor="moving">Переезд</label><br/>
            <select id="moving" spellCheck="false" value={formData.moving} onChange={onFieldChange('moving')}>
              { Array.isArray(movingVariant) && movingVariant.length > 0 &&
                movingVariant.map(item => (
                  <option key={item.id} value={item.id}>{item.variantRu}</option>
                ))
              }
            </select>
          </div>
          <div>
            <br/>
            <label htmlFor="sex">Пол</label><br/>
            <select id="sex" spellCheck="false" value={formData.sex} onChange={onFieldChange('sex')}>
              { Array.isArray(sexVariant) && sexVariant.length > 0 &&
                sexVariant.map(item => (
                  <option key={item.id} value={item.id}>{item.sexRu}</option>
                ))
              }
            </select>
          </div>
          <div>
            <br/>
            <label htmlFor="citizenship">Гражданство</label><br/>
            <select id="citizenship" spellCheck="false"
                    value={formData.citizenship}
                    onChange={onFieldChange('citizenship')}>
              { Array.isArray(citizenship) && citizenship.length > 0 &&
                citizenship.map(item => (
                  <option key={item.id} value={item.id}>{item.countryNameRu}</option>
                ))
              }
            </select>
          </div>
          <div>
            <br/>
            <label htmlFor="marital-status">Семейное положение</label><br/>
            <select id="marital-status" spellCheck="false" value={formData.marital} onChange={onFieldChange('marital')}>
              { Array.isArray(maritalStatus) && maritalStatus.length > 0 &&
                maritalStatus.map(item => (
                  <option key={item.id} value={item.id}>{item.statusRu}</option>
                ))
              }
            </select>
          </div>
          <div>
            <div className="toggle-switch">
              <input type="checkbox" id="hasChildren" className="toggle-input"
                     value={formData.children}
                     onChange={onFieldChange('children')}/>
              <label htmlFor="hasChildren" className="toggle-label"></label>
              <span>У меня есть дети</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}