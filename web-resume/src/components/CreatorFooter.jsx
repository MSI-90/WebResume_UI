import './CreatorFooter.css';

export default function CreatorFooter() {
  return (
    <>
      <div className="creator-footer">
        Footer
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