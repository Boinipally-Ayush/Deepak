import React from 'react'
import deepak from '../assets/deepak.jpeg'
import "./About.css"
const About = () => {
  return (
    <>
    <h1 id='about'>About Me</h1>
    <div className='about'>
      <div className="imagsec">
        <img src={deepak} alt="" />
      </div>
      <div className="abt-data">
      I am a motivated and detail-oriented IT student at the Vidya Jyothi Institute of Technology, pursuing a Bachelor's in Information Technology. With a strong foundation in programming languages such as C, Python, and Java, along with hands-on experience in front-end and back-end development, including HTML and MySQL, I am eager to apply my expertise to create innovative and user-friendly applications. My certifications in Python, SQL, and Data Visualization from IBM and HackerRank validate my proficiency in programming, database management, and data analysis. Additionally, my experience developing a portfolio website showcases my ability to design and implement functional web solutions. With strong problem-solving abilities and communication skills, I am committed to continuous learning and collaborating with dynamic teams to drive innovation and deliver high-quality solutions in the field of technology.
      </div>
    </div>
    </>
  )
}

export default About

