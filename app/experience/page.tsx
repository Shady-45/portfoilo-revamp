"use client"
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCode,FaLaptopCode } from "react-icons/fa";
const Portfolio  = () => {
  return (
    <div className=''>
      <VerticalTimeline
       className="vertical-timeline"
      >
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#f5f5f5', color: '#5b5bae' }}
    contentArrowStyle={{ borderRight: '2px solid  #5b5bae' }}
    date="WebileApps  Dec 2023 - present"
    iconStyle={{ background: '#5b5bae', color: '#fff' }}
    icon = {<FaLaptopCode/>}
    
  >
    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Hyderabad, India</h4>
    <p>
    Frontend development, API integration, Deployment, Bug resolution 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Brandwick Sept 2023 - Dec 2023"
    contentStyle={{ background: '#f5f5f5', color: '#5b5bae' }}
    iconStyle={{ background: '#5b5bae', color: '#fff' }}
    icon = {<FaCode/>}
  >
    <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Remote</h4>
    <p>
      Frontend Developemt, App Developemt
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
    </div>
  )
}

export default Portfolio
