
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
    function handleMouseLeave() {
      // Close all dropdowns
      setHome(false);
      setAbout(false);
      setSkills(false);
      setContact(false);
    }

    navLinksRef.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      navLinksRef.current.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  function handleClickHome() {
    setHome(!home);
    setAbout(false);
    setContact(false);
    setSkills(false);
  }

  function handleClickAbout() {
    setAbout(!about);
    setContact(false);
    setSkills(false);
    setHome(false);
  }

  function handleClickSkills() {
    setSkills(!skills);
    setAbout(false);
    setContact(false);
    setHome(false);
  }

  function handleClickContact() {
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
          <div
            className={`home ${home ? 'underline' : ''}`}
            {...(isMobile ? { onClick: handleClickHome } : { onMouseOver: handleClickHome })}
          >
            Home {isMobile && <MdArrowDropDown />}
          </div>
          {home && (
            <div className={isMobile ? 'dropItems' : 'dropdown'}>
              <HomeDropdown />
            </div>
          )}
          <div
            className={`about ${about ? 'underline' : ''}`}
            {...(isMobile ? { onClick: handleClickAbout } : { onMouseOver: handleClickAbout })}
          >
            About {isMobile && <MdArrowDropDown />}
          </div>
          {about && (
            <div className={isMobile ? 'dropItems' : 'dropdown'}>
              <AboutDropDown />
            </div>
          )}
          <div
            className={`skills ${skills ? 'underline' : ''}`}
            {...(isMobile ? { onClick: handleClickSkills } : { onMouseOver: handleClickSkills })}
          >
            Skills {isMobile && <MdArrowDropDown />}
          </div>
          {skills && (
            <div className={isMobile ? 'dropItems' : 'dropdown'}>
              <SkillsDropDown />
            </div>
          )}
          <div
            className={`contact ${contact ? 'underline' : ''}`}
            {...(isMobile ? { onClick: handleClickContact } : { onMouseOver: handleClickContact })}
          >
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
};
export default Navbar;  