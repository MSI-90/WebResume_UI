
export default function StepButton({ id, number, text, activeSection, onClick }) {
  return (
    <button className={activeSection === id ? 'active' : ''} onClick={() => onClick(id)}>
      <span className="round-number">{number}</span>
      <span className="item-step-button-preview">{text}</span>

      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m9 18 6-6-6-6"/>
      </svg>

      <span className="clear"></span>
    </button>
  );
}