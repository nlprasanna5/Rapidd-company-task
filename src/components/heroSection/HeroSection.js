import React from 'react'
import './HeroSection.css';
import {AiOutlineMail} from 'react-icons/ai';
import {BsLink45Deg} from 'react-icons/bs';
import {CiLocationOn} from 'react-icons/ci';

function HeroSection() {
  return (
    <div className='hero-container'>
        <div className='hero-top'>
           <p className='text'>Proident anim <span className='bold-text'>nor nulla iste.</span></p>
        </div>

        <div className='hero-bottom'>
           <div className='text-bottom'>
            <p className='small-text'>Minim modi yet omnis nor quia so minima. </p>
           </div>
            
            <div className='hero-button-container'>
                <div className='hero-btn'>
                    <div className='icon'><AiOutlineMail/></div>
                    <div className='icon-btn'>Ipsum Lorem</div>
                </div >
                <div className='hero-btn'>
                    <div className='icon'> <BsLink45Deg/></div>
                    <div className='icon-btn'> Ipsum Lorem</div>
                </div>
                <div className='hero-btn'>
                    <div className='icon'><CiLocationOn/></div>
                    <div className='icon-btn'>Ipsum Lorem</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection