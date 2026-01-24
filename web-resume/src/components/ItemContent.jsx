import './ItemContent.css';
import Fio from './FIO';
import Contact from './Contact';
import Goal from './Goal';
// import CreatorFooter from "./CreatorFooter";
import Job from './Job';
import Personal from './Personal';
import Experience from "./Experience";

export default function ItemContent({activeSection, formData, dispatch}) {
  return (
    <>
      <div className="creator-item">
        <div className="item-content">
          {activeSection === 'fio' && <Fio formData={formData} dispatch={dispatch} />}
          {activeSection === 'contact' && <Contact formData={formData} dispatch={dispatch} />}
          {activeSection === 'goal' && <Goal formData={formData} dispatch={dispatch} />}
          {activeSection === 'jobInfo' && <Job formData={formData} dispatch={dispatch} />}
          {activeSection === 'personalInfo' && <Personal formData={formData} dispatch={dispatch} />}
          {activeSection === 'experience' && <Experience formData={formData} formDispatch={dispatch} />}
        </div>
        {/*<CreatorFooter />*/}
      </div>
    </>
  )
}