import './Contact.css';
import Social from './Social';
import SocialVariant from "./modules/social";
import {useState} from "react";

//TODO: сделать управляемый компонент, в плане listbox
export default function Contact(){
  const [ignoreSocial, setIgnoreSocial] = useState(false);
  const [socialList, setSocialList] = useState([]);
  const [error, setError] = useState(false);

  const setSocial = async() => {
    if(ignoreSocial){
      setIgnoreSocial(false);
      setSocialList([]);
      setError(false);
      return;
    }

    const social = new SocialVariant();
    try{
      const data = await social.getSocial();
      if(data?.length > 0){
        setSocialList(data);
        setIgnoreSocial(true);
        setError(false);
      }
    } catch(error){
      setIgnoreSocial(false);
      if (error.message === 'Network Error')
        setError(true) || setError(true);
    }
  }

  return (
    <>
      <div id="item-contact" className="section item-hidden">
        <div className="item-main-header">
          <h3>Контактная информация</h3>
        </div>
        <div className="item-contact-body">
          <div>
            <label htmlFor="phone">Номер телефона</label><br/>
            <input type="tel" id="phone" spellCheck="false" autoComplete='tel' placeholder='+79997776655'/>
          </div>
          <div>
            <label htmlFor="email">Электронная почта</label><br/>
            <input type="email" id="email" required spellCheck="false" autoComplete='email' placeholder='example@email.ru'/>
          </div>
          {ignoreSocial && (
            <Social socialList={socialList}/>
          )}
          <div className="add-social">
            <button onClick={() => setSocial()}>{
              !ignoreSocial ? 'Указать социальную сеть' : 'Удалить социальную сеть'}
            </button>
            {error &&
              <span className='error'>
                Ошибка сети, ответственные уже занимаются решением этого вопроса, повторите попытку позднее...
              </span>}
          </div>
        </div>
      </div>
    </>
  )
}