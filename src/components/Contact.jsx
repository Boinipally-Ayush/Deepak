import React from 'react'
import contact from "../assets/contact.jpg"
import call from "../assets/call.jpg"
import mail from "../assets/mail.jpg"
import facebook from "../assets/facebook.jpg"
import insta from "../assets/insta.jpg"
import twitter from "../assets/twitter.jpg"
import "./Contact.css"
const Contact = () => {
    return (
        <>
            <h1 id='contact'>Contact</h1>
            <div className="contact">
                <div className="contact-img">
                    <img src={contact} alt="" />
                </div>
                <div className="contact-cont">
                    <div className="cont-logo">
                        <img src={mail} alt="" />
                        <p>deepakgali04@gmail.com</p>
                    </div>
                    <div className="cont-logo">
                        <img src={call} alt="" />
                        <p>+919154814808</p>
                    </div>
                    <div class="socialbtns">
                        <div class="socilbtn"><img src={facebook} alt=""/></div>
                        <div class="socilbtn"><img src={insta}alt=""/></div>
                        <div class="socilbtn"><img src={twitter} alt=""/></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
