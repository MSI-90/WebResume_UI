import './FIO.css';
import Photo from '../modules/photo';
import {useEffect, useRef} from "react";

export default function Fio ({formData, dispatch}) {
  const inputFileRef = useRef(null);

  const componentData = {
    firstNameMaxLength: 50,
    lastNameMaxLength: 70,
    fatherNameMaxLength: 70
  }

  useEffect(() => {
    const uploadIfNeeded = async () => {
      if (formData.photo instanceof File) {
        await uploadPhoto(formData.photo);
      }
    };

    uploadIfNeeded();
  }, [formData.photo]);

  const uploadPhoto = async (file) => {
    try {
      const photo = new Photo();
      const data = await photo.sendPhoto(file);

      dispatch({
        type: 'set_photo',
        payload: {photoId: data.id, photoLink: data.presignedURL}
      });

    } catch (error) {
      console.error('Ошибка загрузки фото:', error);
    }
  };

  return (
    <>
      <div id="item-main" className="section item-hidden">
        <div className="item-main-header">
          <h3>ФИО и фото</h3>
        </div>
        <div className="item-main-body">
          <div className="photo">
            <input
              type="file"
              id="photoInput"
              name='photo'
              ref={inputFileRef} accept="image/*"
              hidden
              onChange={(event) => {
                dispatch({
                  type: 'add_photo',
                  payload: event.target.files[0]
                })
              }}
            />
            <div
              id="photo-photo"
              onClick={(event) => inputFileRef.current?.click()}
              style={{backgroundImage: formData.photoLink
                ? `url(${formData.photoLink})`
                : undefined}}
            >
            </div>
            <span
              id="photo-sp"
              onClick={(event) => inputFileRef.current?.click()}>
              Добавьте фото</span>
          </div>
          <div>
            <label id="fam" htmlFor="family">Фамилия</label><br/>
            <input
              type="text"
              id="family"
              name='lastName'
              required
              spellCheck="false"
              maxLength={componentData.lastNameMaxLength}
              value={formData.lastName}
              onChange={(event) => {
                dispatch({
                  type: 'added_lastName',
                  payload: {field: event.target.name, value: event.target.value}
                })
              }}
            />
          </div>
          <div>
            <label htmlFor="name">Имя</label><br/>
            <input
              type="text"
              id="name"
              name='firstName'
              required
              spellCheck="false"
              maxLength={componentData.firstNameMaxLength}
              value={formData.firstName}
              onChange={(event)=>{
                dispatch({
                  type:'added_name',
                  payload: {field: event.target.name, value:event.target.value}
                })
              }}/>
          </div>
          <div>
            <label htmlFor="father-name">Отчество</label><br/>
            <input
              type="text"
              id="father-name"
              name='fatherName'
              spellCheck="false"
              maxLength={componentData.fatherNameMaxLength}
              value={formData.fatherName}
              onChange={(event)=>{
                dispatch({
                  type:'added_female',
                  payload: {field: event.target.name, value:event.target.value}
                })
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}