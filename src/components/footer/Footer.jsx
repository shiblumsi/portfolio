import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
export default function Footer() {
  return (
    <footer>
      <a className='footer_icon'>EGT</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Experiance</a></li>
        <li><a href='#'>Service</a></li>
        <li><a href='#'>Testimonial</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>

      <div className='footer_social'>
        <a href='https://fb.com/shiblumsi'><BsFacebook /></a>
        <a href='https://fb.com/shiblumsi'><BsTwitter /></a>
        <a href='https://fb.com/shiblumsi'><BsLinkedin /></a>
      </div>

      <div className='copyrite'>
        <small>&copy; shiblumsi</small>
      </div>
    </footer>
  )
}
