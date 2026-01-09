import './CreatorFooter.css';

// TODO: рассмотреть целесообразность разместить перед кнопками блок с каким - либо юзербаром.
export default function CreatorFooter() {
  return (
    <>
      <div className="creator-footer">
        <button className="save-button">
          <span>Сохранить и сформировать</span>
        </button>
        <button className="next-button">
          <span>Следующий этап</span>
          <span className="next-step"></span>
        </button>
      </div>
    </>
  )
}