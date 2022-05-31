import React, { useState, useRef, useEffect } from "react"
import { FaBars, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa"
import logo from "./logo.svg"
import { links, socials } from "./data"

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        {/* nav-header tmpatnya logo */}
        <div className='nav-header'>
          <img src={logo} alt='logo1' />
          <button className='nav-toggle'>
            <FaBars />
          </button>
        </div>
        <div className='links-container show-container'>
          <ul className='links'>
            <li>
              <a href='#'>home</a>
            </li>
            <li>
              <a href='#'>about</a>
            </li>
            <li>
              <a href='#'>contact</a>
            </li>
            <li>
              <a href='#'>products</a>
            </li>
          </ul>
        </div>

        <ul className='social-icons'>
          <li>
            <a href='https://www.twitter.com'>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com'>
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com'>
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

/*
Pertannyaan utk links kita gak /blum pake react-router jadi nnti ada error di console
nnti baru pake react-roudter-dom6 krn react utk anrapage link wajib react-ruter
utk yg .social-icons

*/

/*
//sstart-nav-center wraping smua 
nav-headerwraping ->logo dan togle button 
(note:nah gambar garis2 nya itu diabil dari font-awesome yaitu FABars!)
seblahnya :
links-container .show-container ( utk shown /hide jika layar kcil atay lebat)
socila-icons

//end-nav-center wraping smua 
*/
