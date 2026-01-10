import './FIO.css';

const componentData = {
  firstNameMaxLength: 50,
  lastNameMaxLength: 70,
  fatherNameMaxLength: 70
}

export default function Fio (){

  return (
    <>
      <div id="item-main" className="section item-hidden">
        <div className="item-main-header">
          <h3>ФИО и фото</h3>
        </div>
        <div className="item-main-body">
          <div className="photo">
            <input type="file" id="photoInput" name='photo' accept="image/*" hidden/>
            <div id="photo-photo"></div>
            <span id="photo-sp">Добавьте фото</span>
          </div>
          <div>
            <label id="fam" htmlFor="family">Фамилия</label><br/>
            <input type="text" id="family" name='lastName' required spellCheck="false" maxLength={componentData.lastNameMaxLength}/>
          </div>
          <div>
            <label htmlFor="name">Имя</label><br/>
            <input type="text" id="name" name='firstName' spellCheck="false" maxLength={componentData.firstNameMaxLength}/>
          </div>
          <div>
            <label htmlFor="father-name">Отчество</label><br/>
            <input type="text" id="father-name" name='fatherName' required spellCheck="false" maxLength={componentData.fatherNameMaxLength}/>
          </div>
        </div>
      </div>
    </>
  )
}