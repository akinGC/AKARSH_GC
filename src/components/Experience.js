import * as React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function BasicTimeline() {
  return (
   <>
   <VerticalTimeline lineColor={'#ddd'}>
   <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Jan/2021-Feb/2023"
    dateClassName="custom-date"
    iconStyle={{ background: '#081552', color: '#fff' }}
    contentStyle={{
      background: 'transparent',
      color:'white',
      border:'1px solid white',
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
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Mar/2023-Oct/2024"
    dateClassName="custom-date"
    iconStyle={{ background: '#081552', color: '#fff' }}
    contentStyle={{
      background: 'transparent',
      color:'white',
      border:'1px solid white',
      borderRadius: '8px'
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
  </VerticalTimelineElement>
 <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Oct/2024-Present"
    dateClassName="custom-date"
    iconStyle={{ background: '#081552', color: '#fff' }}
    contentStyle={{
      background: 'transparent',
      color:'white',
      border:'1px solid white',
      borderRadius: '8px'
    }}
  >
    <h3 style={{marginBottom:'5px' }}><a style={{textDecoration:'none',backgroundColor:'none',color:'#007cc3'}} href='https://www.bestbuy.com/'target="_blank">BestBuy India</a></h3>
    
    
   <ul className='jobdesc'>
    <li>Worked on Customer and Agent facing Applications for Real-time communication using Twilio Voice, Chat and Video.</li>
    <li>Integrated RESTful services for user authentication, session handling and message routing.</li>
   <li>Contributed to CI/CD pipelines using GitHub Actions for seamless deployment. Monitored Applications performance, resolved
memory-leaks issues in long running React components.</li>
   <li>Followed TDD practices, wrote unit tests in Jest, RTL and contributed to integration test suites using Java – Selenium.</li>
   
   
   </ul>
  </VerticalTimelineElement>
</VerticalTimeline>
   </>
  );
}
