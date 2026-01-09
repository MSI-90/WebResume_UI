import './ItemContent.css';
import FioAndFoto from './FIO';
import Contact from './Contact';
import Goal from './Goal';
import CreatorFooter from "./CreatorFooter";
import Job from "./Job";

export default function ItemContent({ activeSection }) {
  return (
    <>
      <div className="creator-item">
        <div className="item-content">
          {activeSection === 'fio' && <FioAndFoto />}
          {activeSection === 'contact' && <Contact />}
          {activeSection === 'goal' && <Goal />}
          {activeSection === 'JobInfo' && <Job />}
        </div>
        <CreatorFooter />
      </div>
    </>
  )
}