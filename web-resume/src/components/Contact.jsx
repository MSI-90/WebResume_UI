import './Contact.css';
import Social from './modules/social';

export default function Contact(){

  const socials = async() => {
    console.log(process.env.REACT_APP_PAGE_TITLE);
    const social = new Social();
    await social.getSocial();
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
          <div className="add-social">
            <button onClick={() => socials()}>Указать социальную сеть</button>
          </div>
        </div>
      </div>
    </>
  )
}