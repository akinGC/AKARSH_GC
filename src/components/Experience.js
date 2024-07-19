import * as React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';


export default function BasicTimeline() {
  return (
   <>
   <Timeline lineColor={'#ddd'}>
   <TimelineItem
    key="002"
    dateText="Jan/2021-Feb/2023"
    dateInnerStyle={{ background: '#081552', color: 'white' }}
    bodyContainerStyle={{
    // background: '#ddd',
    color:'white',
    border:'1px solid white',
    padding: '20px',
    borderRadius: '8px'
  }}
  >
    <h3 style={{marginBottom:'5px' }}><a style={{textDecoration:'none',backgroundColor:'none',color:'#007cc3'}} href='https://www.infosys.com/'target="_blank">Infosys LTD</a></h3>
    
    
   <ul className='jobdesc'>
    <li>Adapt to working with cross-functional teams to define and implement UI/UX designs, ensuring the final product meets both functional and aesthetic standards.</li>
    <li>Successfully integrated third-party libraries and APIs to extend application functionality, enhancing user experience and overall application performance.</li>
   <li>Conducted thorough code reviews and implemented best practices to enhance code quality, maintainability, and scalability</li>
   <li>Committed to delivering high-quality, bug-free applications by working closely with QA teams and actively participating in agile development processes, including sprint planning, daily stand- ups, and retrospectives.</li>
   <li>Developed internal applications for a telecommunications client, NBN, honing my skills and contributing effectively as a team player.</li>
   
   
   </ul>
  </TimelineItem>
  <TimelineItem
    key="002"
    dateText="Mar/2023-Present"
    dateInnerStyle={{ background: '#081552', color: 'white' }}
    bodyContainerStyle={{
      // background: '#ddd',
      color:'white',
      border:'1px solid white',
      padding: '20px',
      borderRadius: '8px',
      // boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
  
    }}
  >
    <h3 style={{marginBottom:'5px' }}><a style={{textDecoration:'none',backgroundColor:'none',color:'#6800e0'}} href='https://www.c5i.ai/'target="_blank">C5I LTD</a></h3>
    <ul className='jobdesc'>
        <li>Experience in developing and maintaining responsive web applications using React.js and Next.js, ensuring optimal user experience across various devices.</li>
    <li>Enhance code quality, maintainability, and scalability through the effective use of TypeScript.</li>
    <li>Actively participates in agile processes, including sprint planning, daily stand-ups, and retrospectives, fostering a productive development workflow.</li>
    <li>Created a chat application end to end with live chat options using WebSockets, featuring streaming animation, support for text, images, Excel files, and graphs. The application is fully responsive and built for Microsoft</li>
    <li>Delivered exceptional results for industry leaders like Microsoft, Estée Lauder, and Colgate</li>
    </ul>
  </TimelineItem>
 
</Timeline>
   </>
  );
}
