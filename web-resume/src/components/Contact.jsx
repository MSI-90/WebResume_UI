import './Contact.css';
import SocialVariant from "./modules/social";
import {useState} from "react";

export default function Contact(){
  const [ignoreSocial, setIgnoreSocial] = useState(false);

  const setSocial = async() => {
    if(ignoreSocial){
      setIgnoreSocial(false);
      return;
    }
    const social = new SocialVariant();
    try{
      const data = await social.getSocial();
      if(data?.length > 0){
        console.log(data);
        setIgnoreSocial(true);
      }
    } catch(error){
      setIgnoreSocial(false);
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
            <input type="tel" id="phone" spellCheck="false"/>
          </div>
          <div>
            <label htmlFor="email">Электронная почта</label><br/>
            <input type="email" id="email" required spellCheck="false"/>
          </div>
          {ignoreSocial && (
            <div id='soc'>
              <label></label>
              <input type='text'></input>
            </div>
          )}
          <div className="add-social">
            <button onClick={() => setSocial()}>{
              !ignoreSocial ? 'Указать социальную сеть' : 'Удалить социальную сеть'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}