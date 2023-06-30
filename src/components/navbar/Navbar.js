



import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import HomeDropdown from '../homeDropDown/HomeDropdown';
import AboutDropDown from '../aboutDropDown/AboutDropDown';
import SkillsDropDown from '../skillsDropDown/SkillsDropDown';
import ContactDropDown from '../contactDropDown/ContactDropDown';
import { MdArrowDropDown } from 'react-icons/md';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [skills, setSkills] = useState(false);
  const [contact, setContact] = useState(false);
  const navLinksRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navLinksRef.current && !navLinksRef.current.contains(event.target)) {
        // Clicked outside the nav links, close all dropdowns
        setHome(false);
        setAbout(false);
        setSkills(false);
        setContact(false);
      }
    }

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  function handleClickHome(e) {
    e.stopPropagation();
    setHome(!home);
    setAbout(false);
    setContact(false);
    setSkills(false);
  }

  function handleClickAbout(e) {
    e.stopPropagation();
    setAbout(!about);
    setContact(false);
    setSkills(false);
    setHome(false);
  }

  function handleClickSkills(e) {
    e.stopPropagation();
    setSkills(!skills);
    setAbout(false);
    setContact(false);
    setHome(false);
  }

  function handleClickContact(e) {
    e.stopPropagation();
    setContact(!contact);
    setAbout(false);
    setSkills(false);
    setHome(false);
  }

  return (
    <>
      <nav className="navbar">
        <h3 className="logo">Logo</h3>

        <div className={isMobile ? 'nav-links-mobile' : 'nav-links'} ref={navLinksRef}>
          <div className={`home ${home ? 'underline' : ''}`} onClick={(event) => handleClickHome(event)}>
            Home {isMobile && <MdArrowDropDown />}
          </div>
          {home && (
            <div className={isMobile ? 'dropItems' : 'dropdown'}>
              <HomeDropdown />
            </div>
          )}
          <div className={`about ${about ? 'underline' : ''}`} onClick={(event) => handleClickAbout(event)}>
            About {isMobile && <MdArrowDropDown />}
          </div>
          {about && (
            <div className={isMobile ? 'dropItems' : 'dropdown'}>
              <AboutDropDown />
            </div>
          )}
          <div className={`skills ${skills ? 'underline' : ''}`} onClick={(event) => handleClickSkills(event)}>
            Skills {isMobile && <MdArrowDropDown />}
          </div>
          {skills && (
            <div className={isMobile ? 'dropItems' : 'dropdown'}>
              <SkillsDropDown />
            </div>
          )}
          <div className={`contact ${contact ? 'underline' : ''}`} onClick={(event) => handleClickContact(event)}>
            Contact {isMobile && <MdArrowDropDown />}
          </div>
          {contact && (
            <div className={isMobile ? 'dropItems' : 'dropdown'}>
              <ContactDropDown />
            </div>
          )}
        </div>

        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>
      </nav>
    </>
  );
}

export default Navbar;
