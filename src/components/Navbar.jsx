import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive); // Toggle the state
  };

  const closeMenuAndScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsActive(false); // Close menu after clicking
  };

  return (
    <>
      <nav>
        <div className="logo">Deepak</div>
        <ul className={isActive ? "active" : ""}>
          <li>
            <NavLink to="/" onClick={() => closeMenuAndScroll("home")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={() => closeMenuAndScroll("about")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={() => closeMenuAndScroll("skills")}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={() => closeMenuAndScroll("experience")}>
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={() => closeMenuAndScroll("contact")}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div
          className={`hambar ${isActive ? "open" : ""}`}
          onClick={handleClick}
        >
          <span className="hamber-line"></span>
          <span className="hamber-line"></span>
          <span className="hamber-line"></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

