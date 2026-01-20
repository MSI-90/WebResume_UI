import './ItemContent.css';
import Fio from './FIO';
import Contact from './Contact';
import Goal from './Goal';
// import CreatorFooter from "./CreatorFooter";
import Job from './Job';
import Personal from './Personal';
import Experience from "./Experience";

export default function ItemContent({activeSection, formData, onFieldChange}) {
  return (
    <>
      <div className="creator-item">
        <div className="item-content">
          {activeSection === 'fio' && <Fio formData={formData} onFieldChange={onFieldChange} />}
          {activeSection === 'contact' && <Contact formData={formData} onFieldChange={onFieldChange} />}
          {activeSection === 'goal' && <Goal formData={formData} onFieldChange={onFieldChange} />}
          {activeSection === 'jobInfo' && <Job formData={formData} onFieldChange={onFieldChange} />}
          {activeSection === 'personalInfo' && <Personal formData={formData} onFieldChange={onFieldChange} />}
          {activeSection === 'experience' && <Experience formData={formData} onFieldChange={onFieldChange} />}
        </div>
        {/*<CreatorFooter />*/}
      </div>
    </>
  )
}