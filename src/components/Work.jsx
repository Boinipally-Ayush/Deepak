import React from 'react'
import salesforce from '../assets/salesforce.jpg'
import "./Work.css"
const Work = () => {
    return (
        <>
            <h1 id='experience'>Experience</h1>
            <div className="work">
                <div className="work-img">
                    <img src={salesforce} alt="" />
                </div>
                <div className="work-cont">
                    <h2>Salesforce Administrator Virtual Internship </h2>
                    <p>During my Salesforce Administrator Virtual Internship, I gained hands-on experience in managing and configuring Salesforce environments. I worked on user and security management by setting up roles, profiles, permission sets, and organization-wide defaults. I handled data management tasks, including importing, exporting, and ensuring data integrity through validation rules. I automated business processes using Flows, Process Builder, and approval workflows. Additionally, I created custom reports and dashboards to provide data-driven insights and configured standard and custom objects, fields, and layouts for optimized user experience. This internship strengthened my CRM administration skills and practical problem-solving abilities.</p>
                </div>
            </div>
        </>
    )
}

export default Work
