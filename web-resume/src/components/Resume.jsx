import './Resume.css';
import ResumeWrapper from './ResumeWrapper';
import ItemContent from "./ItemContent";
import {useState} from "react";

export default function Resume({visible}) {
  const [activeSection, setActiveSection] = useState('fio');
  return (
    visible && (
    <>
      <div className="resume">
        <ResumeWrapper activeSection={activeSection} setActiveSection={setActiveSection} />
        <ItemContent activeSection={activeSection} />
      </div>
    </>)
  )
}