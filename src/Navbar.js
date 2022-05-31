import React, { useState, useRef, useEffect } from "react"
import { FaBars, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa"
import logo from "./logo.svg"
import { links, socials } from "./data"

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  return (
    <nav>
      <div className='nav-center'>
        {/* nav-header tmpatnya logo */}
        <div className='nav-header'>
          <img src={logo} alt='logo1' />
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        {/* cara kedua dgn itenary class jadi kalau true munculkan link-container +show container kalau false hanya link-container saja */}
        <div
          className={` ${
            showLinks ? "links-container show-container" : "links-container"
          }`}
        >
          <ul className='links'>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>

        <ul className='social-icons'>
          <li className='links'>
            {socials.map((social) => {
              const { id, url, icon } = social
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              )
            })}
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
