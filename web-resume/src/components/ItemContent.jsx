import './ItemContent.css';
import FioFoto from './FIO';

export default function ItemContent({ activeSection }) {
  return (
    <>
      <div className="creator-item">
        <div className="item-content">
          {activeSection === 'fio' && <FioFoto />}
        </div>
      </div>
    </>
  )
}