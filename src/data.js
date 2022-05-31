//disini buat links dan icons install dulu react-icons
import React from "react"
//react-icons pilihanya banyak piluh yg FontAwesome atau FA
import { Fabehance, FaLinkedin, FaTwitter } from "react-icons/fa"
//arahkan ke browser link
//trdiri atas object array [{id,url,text}]
export const links = [
  { id: 1, url: "/", text: "random" },
  { id: 2, url: "/about", text: "about" },
  { id: 3, url: "/project", text: "project" },
  { id: 4, url: "/contact", text: "contact" },
  { id: 5, url: "/profile", text: "profile" },
]
//ini utk link social ngarahh ke webpage addtess
export const socials = [
  //ambil iconnya tetap dari FA ( Rac-icons/font Awesome )
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.behance.net",
    icon: <FaBehance />,
  },
]
