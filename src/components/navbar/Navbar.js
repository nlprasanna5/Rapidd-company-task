
import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import HomeDropdown from '../homeDropDown/HomeDropdown';
import AboutDropDown from '../aboutDropDown/AboutDropDown';
import SkillsDropDown from '../skillsDropDown/SkillsDropDown';
import ContactDropDown from '../contactDropDown/ContactDropDown';
import { MdArrowDropDown } from 'react-icons/md';
import { IoMdArrowDropup } from 'react-icons/io';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [skills, setSkills] = useState(false);
  const [contact, setContact] = useState(false);
  const [dropDownIcon, setDropDownIcon] = useState(false);
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
    setDropDownIcon(!dropDownIcon);
  }

  function handleClickAbout() {
    setAbout(!about);
    setContact(false);
    setSkills(false);
    setHome(false);
    setDropDownIcon(!dropDownIcon);
  }

  function handleClickSkills() {
    setSkills(!skills);
    setAbout(false);
    setContact(false);
    setHome(false);
    setDropDownIcon(!dropDownIcon);
  }

  function handleClickContact() {
    setContact(!contact);
    setAbout(false);
    setSkills(false);
    setHome(false);
    setDropDownIcon(!dropDownIcon);
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
            Home{
              isMobile && (
                dropDownIcon ? <MdArrowDropDown className="dropdown-icon" /> : <IoMdArrowDropup className="dropup-icon" />
              )
            }
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
            About {
              isMobile && (
                dropDownIcon ? <MdArrowDropDown className="dropdown-icon" /> : <IoMdArrowDropup className="dropup-icon" />
              )
            }
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
            Skills {
              isMobile && (
                dropDownIcon ? <MdArrowDropDown className="dropdown-icon" /> : <IoMdArrowDropup className="dropup-icon" />
              )
            }
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
            Contact{
              isMobile && (
                dropDownIcon ? <MdArrowDropDown className="dropdown-icon" /> : <IoMdArrowDropup className="dropup-icon" />
              )
            }
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