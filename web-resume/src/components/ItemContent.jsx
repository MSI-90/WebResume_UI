import './ItemContent.css';
import FioFoto from './FIO';
import Contact from './Contact';
import CreatorFooter from "./CreatorFooter";

export default function ItemContent({ activeSection }) {
  return (
    <>
      <div className="creator-item">
        <div className="item-content">
          {activeSection === 'fio' && <FioFoto />}
          {activeSection === 'contact' && <Contact />}
        </div>
        <CreatorFooter />
      </div>
    </>
  )
}