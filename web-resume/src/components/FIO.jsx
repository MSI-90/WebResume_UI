import './FIO.css';

export default function FioFoto (){
  return (
    <>
      <div id="item-main" className="section item-hidden">
        <div className="item-main-header">
          <h3>ФИО и фото</h3>
        </div>
        <div className="item-main-body">
          <div className="photo">
            <input type="file" id="photoInput" accept="image/*" hidden/>
            <div id="photo-photo"></div>
            <span id="photo-sp">Добавьте фото</span>
          </div>
          <div>
            <label id="fam" htmlFor="Family">Фамилия</label><br/>
            <input type="text" id="Family" required spellCheck="false"/>
          </div>
          <div>
            <label htmlFor="Name">Имя</label><br/>
            <input type="text" id="Name" required spellCheck="false"/>
          </div>
          <div>
            <label htmlFor="Father-name">Отчество</label><br/>
            <input type="text" id="Father-name" required spellCheck="false"/>
          </div>
        </div>
      </div>
    </>
  )
}