import React from 'react'
import deepak from '../assets/deepak.jpeg'
import "./Section.css"
const Section = () => {
    return (
        <div className='container' id='home'>
            <div className="infosec">
                <span>
                    <p>I am</p>
                    <p id="bluefont">Software Developer</p>
                </span>
                <div className="headingname">Deepak</div>
                <div className="rantxt">Passionate IT student skilled in Python, Java, C, and JavaScript, pursuing a
                    Bachelor's in Computer Science. Eager to apply problem-solving and
                    technical expertise to impactful software development projects. Committed to continuous learning
                    and
                    contributing to innovation in a collaborative
                    environment. </div>
                <div className="btns">
                    <a href="Resume Pal Tech.pdf" target='_blank' className="btnss" id="cvbtn">Download Resume</a>
                    <a href="https://www.linkedin.com/in/deepak-gali-53400a313/" target='_blank'className="btnss">Connect</a>
                </div>
            </div>
            <div className="imagsec">
                <img src={deepak} alt="Deepak" />
            </div>
        </div>
    )
}

export default Section
