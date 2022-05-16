
import "./App.css";
import { Fragment, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons';




function App() {






  const testRef = useRef(null);
  const SkilRef = useRef(null);
  const ExpRef = useRef(null);
  const cntRef = useRef(null);
  const scrollToEdu = () => {testRef.current.scrollIntoView();
  };
  const scrollToSkill = () => SkilRef.current.scrollIntoView();
  const scrollToExp = () => ExpRef.current.scrollIntoView();
  const scrollToCnt = () => cntRef.current.scrollIntoView();
  
 
  return (
 <Fragment>
     <div id="loadcover"> <div id="load"></div></div>
      
        <div className='whole'id="whole" onLoad={()=>{
          setTimeout(()=>document.getElementById('loadcover').style.display='none',1000);
      document.getElementById('ifram').style.display='none'}}>
        <div className="taught">
          <div className="crcle"></div>
          <div className="slantline"></div>
          <div className="crcle scndsrc"></div>
          <div className="lngline"></div>
          <div className="frntart">frontend Artist</div>
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
        
          <span onClick={scrollToSkill}><span className="numbers">01</span><span className="zing"></span> SKILLS</span>
          <span onClick={scrollToExp}><span className="numbers">02</span> EXPERIENCE</span>
          <span onClick={scrollToEdu}><span className="numbers">03</span> EDUCATION</span>
          <span onClick={scrollToCnt}><span className="numbers">04</span> CONTACT</span>
        </div>
        <div className='port_name'><span className="letter_a">AKARSH</span>
          <span className="initials">GC</span>
        </div>
        <div className='port_frontend'>
          <span className='port_zero'>00</span>
          <div class="bouncing-text">
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
          <p className='frstptag'>Desire a Developer position where<p> my skills will be used to full </p>
            <p>seek a Dynamic and productive environment </p><p ref={SkilRef} >with oppurtunity to learn new skills</p> </p>
        </div>
       
        <div className='port_skills'  data-aos="slide-up">
          <div className='port_number_part'>
            <span className='num_one'>01</span>
            <span className='skills'>SKILLS</span>
          </div>
          <p className='skill_ptag'>
            I am confident that I will meet <p>all expectation at work in mentioned</p>
            skills ,passionatly ready to learn<p> new technologies</p>
          </p>
          <div className='skill_list'>
            <span  ref={ExpRef}>HTML</span>
            <span>CSS</span>
            <span>JAVASCRIPT</span>
            <span >React JS</span>
            <span>Mongo DB</span>
            <span  >Git</span>
          </div>

        </div>
        <div className='port_experience' data-aos="slide-up" onFocus={(e)=>{
e.target.style.backgroundColor='red'
        }}>
          <div className='port_number_part'>
            <span className='num_one'>02</span>
            <span className='skills'>EXPERIENCE</span>
          </div>
          <div className='company'>
            <span className='exp_clmn'> <span className='cmpny_name'>Infosys LTD</span>
              <span>2021-present</span></span>
            <span>Completed Infosys certified React JS Developer <p ref={testRef}>training where i built components for web-Applications</p><p   >that are efficient, Re-usable
              and Responsive</p></span>
          </div>


        </div>
        <div className='port_education' data-aos="slide-up">
          <div className='port_number_part'>
            <span className='num_one'>03</span>
            <span className='skills'>EDUCATION</span>
          </div>
          <div className='company'>
            <span className='exp_clmn'> <span className='cmpny_name'>Vidya Vikas engineering college<p></p></span>
              <span>2016-2020</span></span>
            <span className='ecpart'><span ref={cntRef}>Electronics & Communication engineering</span>CGPA - 7.6</span>
          </div>

        </div>
        

        <div className='port_contact' ref={cntRef} data-aos="slide-up">
          <div className='port_number_part'>
            <span className='num_one'>04</span>
            <span className='skills'>CONTACT</span>
          </div>
          <div className='company'>
            <span className='exp_clmnc'> <span className='cmpny_name'>Please feel free to contact on any of<p> these platforms</p></span>
            </span>
            <span className='ecpart'>
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
       
       
<div id="ifram"><iframe width="560" height="315" src="https://www.youtube.com/embed/lYLlFCWexK0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

      </div>

   </Fragment>

  );
}

export default App;
