import './Contact.css';
import Social from './Social';
import SocialVariant from "../modules/social";
import {useState} from "react";

export default function Contact({formData, dispatch}) {
  const [ignoreSocial, setIgnoreSocial] = useState(false);
  const [socialList, setSocialList] = useState([]);
  const [error, setError] = useState(false);

  const socialArgs = {
    socialList,
    value: formData.socialType,
    nickValue: formData.socialLink,
    dispatch
  }

  const setSocial = async() => {
    if(ignoreSocial){

      formData.socialType = 0;
      formData.socialLink = '';

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
        setError(true);

      setError(true);
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
            <input type="tel"
                   id="phone"
                   spellCheck="false"
                   name='phone'
                   autoComplete='tel'
                   placeholder='+79997776655'
                   value={formData.tel}
                   onChange={(event)=>{
                     dispatch({
                       type: 'change-phone',
                       payload: { field: event.target.name, value: event.target.value }
                     });
                   }} />
          </div>
          <div>
            <label htmlFor="email">Электронная почта</label><br/>
            <input type="email"
                   id="email"
                   spellCheck="false"
                   name='email'
                   required autoComplete='email'
                   placeholder='example@email.ru'
                   value={formData.email} onChange={(event)=>{
                     dispatch({
                       type: 'change-email',
                       payload: { field: event.target.name, value: event.target.value }
                     })}} />
          </div>
          {ignoreSocial && (
            <Social {...socialArgs} />
          )}
          <div className="add-social">
            <button type="button" onClick={() => setSocial()}>{
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