
import "./App.css";
import { Fragment, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import BasicTimeline from "./components/Experience";
import ScrollToTop from "react-scroll-to-top";
// import Snowfall from 'react-snowfall'



function App() {

  const testRef = useRef(null);
  const SkilRef = useRef(null);
  const ExpRef = useRef(null);
  const cntRef = useRef(null);
  const scrollToEdu = () => { testRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  const scrollToSkill = () => { SkilRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  const scrollToExp = () => { ExpRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  const scrollToCnt = () => { cntRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

  
  useEffect(()=>{
    AOS.init();

},[])
  return (
 <Fragment>
     {/* <div id="loadcover"> <div id="load"></div></div> */}
      
        <div className='whole'id="whole" onLoad={()=>{
          setTimeout(()=>document.getElementById('loadcover').style.display='none',1000);
      document.getElementById('ifram').style.display='none'}}>
        <div className="taught">
          <div className="crcle"></div>
          <div className="slantline"></div>
          <div className="crcle scndsrc"></div>
          <div className="lngline"></div>
          <div className="frntart" id="frtartTxt">Front-End Artist</div>
        </div>
       <div >
       <FontAwesomeIcon  id='menu_icon'className="menu_icon"onClick={()=>{
          const target = document.getElementById('port_contents');
          target.style.height='initial';
          document.getElementById('menu_icon').style.display='none';

        }} icon={faBars}></FontAwesomeIcon>
      <FontAwesomeIcon className="menu_cross"onClick={()=>{
        document.getElementById('menu_icon').style.display='block';
        const target = document.getElementById('port_contents');
          target.style.height='0%';
      }} icon={faXmark}></FontAwesomeIcon>
       </div>
       <div className='port_contents' id='port_contents'>
        
          <span onClick={scrollToSkill}><span className="numbers text-shadow">01</span><span className="zing "></span> SKILLS</span>
          <span onClick={scrollToExp}><span className="numbers text-shadow">02</span> EXPERIENCE</span>
          <span onClick={scrollToEdu}><span className="numbers text-shadow">03</span> EDUCATION</span>
          <span onClick={scrollToCnt}><span className="numbers text-shadow">04</span> MEET</span>
        </div>
        <div className='port_name'><span className="letter_a">AKARSH</span>
          <span className="initials">GC</span>
        </div>
        <div className='port_frontend'>
          <span className='port_zero'>00</span>
          <div class="bouncing-text" > 
          {/* developer animation */}
          
            <span>I'm a Front-End&nbsp;</span>
  <div class="d">D</div>
  <div class="e">E</div>
  <div class="v">V</div>
  <div class="ee">E</div>
  <div class="l">L</div>
  <div class="o">O</div>
  <div class="p">P</div>
  <div class="eee">E</div>
  <div class="r">R</div>
  <div class="shadow"></div>
  <div class="shadow-two"></div>
</div>
          <p className='frstptag' >Seeking a Developer position <p >in a dynamic and productive environment</p> where I can fully utilize my skills <br/>and have opportunities to learn new ones.
        </p>
        </div >
       <div ref={SkilRef} className="" style={{position:'absolute',top:'85vh'}}></div>
        <div className='port_skills'  data-aos="slide-up">
          <div className='port_number_part'>
            <span className='num_one'>01</span>
            <span className='skills text-shadow'>SKILLS</span>
          </div>
          <p className='skill_ptag'>
            I am confident that I will meet <p>all expectation at work in mentioned</p>
            skills ,passionatly ready to learn<p> new technologies</p>
          </p>
          <div className='skill_list'>
            <span className="rainbow-text rainbow-text1" style={{border:'1px solid white',width:'fit-content',padding:'3px'}}>HTML</span>
            <span className="rainbow-text rainbow-text2">CSS/SCSS</span>
            <span className="rainbow-text rainbow-text3">TailwindCSS/Bootstrap</span>
            <span className="rainbow-text rainbow-text4">Javascript</span>
            <span className="rainbow-text rainbow-text5">Typescript</span>
            <span className="rainbow-text rainbow-text6">React JS</span>
            <span className="rainbow-text rainbow-text7">Next JS</span>
            <span className="rainbow-text rainbow-text8">Mongo DB</span>
            <span className="rainbow-text rainbow-text9" >Git/GitHub</span>
          </div>

        </div>
        <div style={{position:'absolute',top:'145vh'}}  ref={ExpRef}></div>
        <div className='port_experience' data-aos="slide-up" onFocus={(e)=>{
e.target.style.backgroundColor='red'
        }}>
          <div className='port_number_part'>
            <span className='num_one'>02</span>
            <span className='skills text-shadow'>EXPERIENCE</span>
          </div>
          <div className='company'>
            {/* <ErrorBoundary> */}
            <BasicTimeline/>
            {/* </ErrorBoundary> */}
            
          </div>


        </div>
        <div style={{position:'absolute',top:'350vh'}} ref={testRef}></div>
        <div className='port_education' data-aos="slide-up">
          <div className='port_number_part'>
            <span className='num_one'>03</span>
            <span className='skills text-shadow'>EDUCATION</span>
          </div>
          <div className='company'>
            <span className='exp_clmn'> <span className='cmpny_name'>Vidya Vikas engineering college<p></p></span>
              <span>2016-2020</span></span>
            <span className='ecpart'><span >Electronics & Communication<p>engineering</p> </span>CGPA - 7.6</span>
          </div>

        </div>
        
        <div style={{position:'absolute',top:'400vh'}}  ref={cntRef}></div>
        <div className='port_contact'data-aos="slide-up">
          <div className='port_number_part' >
            <span className='num_one'>04</span>
            <span className='skills text-shadow'>MEET</span>
          </div>
          <div className='company'>
            <span className='exp_clmnc'> <span className='cmpny_name'>Please feel free to contact on any of<p> these platforms</p></span>
            </span>
            <span className='ecpart2'>
              <table>
                <tbody>
                  <tr className='trtop' aria-rowspan='2vh'><th onClick={() => { window.location.href = 'https://github.com/akinGC'; }} className='contact_options'>GitHub</th><th><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></th></tr>
                  <tr className='trtop mail' aria-rowspan='2vh'><th onClick={() => { window.location.href = 'mailto:akarshgc1998@gmail.com'; }} className='contact_options'>Gmail</th><th><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></th><th className="mailid">&nbsp;akarshgc1998@gmail.com</th></tr>
                  <tr className='trtop'><th onClick={() => { window.location.href = 'https://in.linkedin.com/in/akarsh-gc-703062190?original_referer=https%3A%2F%2Fwww.google.com%2F' }} className='contact_options'>LinkedIn &nbsp;</th><th><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></th></tr>
                </tbody>
              </table>
            </span>
          </div>

        </div>
        <div id="snowflakes-container"></div>
       
{/* <div id="ifram"><iframe width="560" height="315" src="https://www.youtube.com/embed/lYLlFCWexK0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div> */}

      </div>
      <ScrollToTop smooth className="scroll2top"/>
     

   </Fragment>

  );
}

export default App;
