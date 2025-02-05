import React from 'react'
import "./Skills.css"
import skills from '../assets/skills.jpg'
const Skills = () => {
  return (
    <>
    <h1 id='skills'>Skills</h1>
    <div className='skills'>
      <div className="skill-img">
        <img src={skills} alt="" />
      </div>
      <div className="skill-list">
        <ol className='skill-unorder'>
            <li className='skill-li'>Python</li>
            <li className='skill-li'>Java</li>
            <li className='skill-li'>C</li>
            <li className='skill-li'>Mysql</li>
        </ol>
      </div>
    </div>
    </>
  )
}

export default Skills
