import './ItemContent.css';
import Fio from './FIO';
import Contact from './Contact';
import Goal from './Goal';
import CreatorFooter from "./CreatorFooter";
import Job from "./Job";

export default function ItemContent({activeSection, formData, onFieldChange}) {
  return (
    <>
      <div className="creator-item">
        <div className="item-content">
          {activeSection === 'fio' && <Fio formData={formData} onFieldChange={onFieldChange}/>}
          {activeSection === 'contact' && <Contact />}
          {activeSection === 'goal' && <Goal />}
          {activeSection === 'jobInfo' && <Job />}
        </div>
        <CreatorFooter />
      </div>
    </>
  )
}