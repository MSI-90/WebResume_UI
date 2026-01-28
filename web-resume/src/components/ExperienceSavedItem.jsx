import './ExperienceSavedItem.css';
import Button from './Button';

export default function ExpSavedItem(props){
  const {expItem} = props;

  const deleteItem = (itemId) =>
    props.deleteItem(itemId);

  const editItem = (itemId) =>
    props.editItem(itemId);

  return (
    <>
      <section className="experience-items">
        {expItem.map(item => (
          <article key={item.id} className="experience-item">
            <h4>{item.company}</h4>
            <p>{item.jobTitle}</p>
            <div className="experience-row">
              <span className="experience-dates">
                {item.periodStartMonthName} {item.periodStartYear} – {item.workNow
                  ? 'наст. вр.'
                  : `${item.periodEndMonthName} ${item.periodEndYear}`}
              </span>

              <div className="experience-actions">
                <Button type={'button'} baseButton={false} className="delete-btn" onClick={() => deleteItem(item.id)}>
                  Удалить
                </Button>

                <Button type={'button'} baseButton={false} className="edit-btn" onClick={() => editItem(item.id)}>
                  Редактировать
                </Button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}

