import React from 'react'
import logo from '../img/logo.png'
import insta from '../img/icons8-instagram-94.png'
import whatsapp from '../img/icons8-whatsapp-48.png'
import twitter from '../img/icons8-twitter-48.png'

export default function Footer() {
  return (
    <>
       <div className='footer'>
                <div className='logoset'>
                    <div className='logoname'>SHIVEEN <span className='footerlogo'> DESIGN</span></div>
                    <div className='logoDescription'>we design your dreams</div>
                </div>

                <div className='footersec'>

                    <div className='part1'>
                        <div className='mainhead'>Get In Touch</div>
                        <div className='contlogo'>
                        <img className='insta' src={insta}></img>
                        <img className='twitter' src={twitter}></img>
                        <img className='whatsapp' src={whatsapp}></img>
                        </div>
                       
                    </div>
                     
                    <div className='part1'>
                        <div className='mainhead'>Support</div>
                        <div id='subtopic'>Home</div>
                        <div id='subtopic'>Photos</div>
                        <div id='subtopic'>About Us</div>
                    </div>

                </div>


        </div>
    </>
  )
}
