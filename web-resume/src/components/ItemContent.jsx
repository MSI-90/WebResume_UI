import './ItemContent.css';
import FioFoto from './FIO';
import Contact from './Contact';
import Goal from './Goal';
import CreatorFooter from "./CreatorFooter";

export default function ItemContent({ activeSection }) {
  return (
    <>
      <div className="creator-item">
        <div className="item-content">
          {activeSection === 'fio' && <FioFoto />}
          {activeSection === 'contact' && <Contact />}
          {activeSection === 'goal' && <Goal />}
        </div>
        <CreatorFooter />
      </div>
    </>
  )
}