import React, { useState } from 'react'
import img from '../img/logo.png'
import { Link } from "react-router-dom";


export default function Navbar() {

  const [navbar, setNavbar] = useState(false);

  const setBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', setBackground);

  return (
    <>
      <nav className=" navbar-expand-lg  fixed-top "  >
        <nav className={navbar ? "navbar active " : "navbar"}>
          <div class="container-fluid">
            <Link className="navbar-brand" to="/">SHIVEEN <span className='logodesign'>DESIGN</span></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link active" to="/photos">Photos</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link active" to="/about">About</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link active" to="/contact">Contact</Link>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </nav>

    </>
  )
}
