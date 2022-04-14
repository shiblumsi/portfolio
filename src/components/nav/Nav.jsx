import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiServiceFill} from 'react-icons/ri'
import {BiBook} from 'react-icons/bi'
import {FcContacts} from 'react-icons/fc'
import {useState} from 'react'

export default function Nav() {
  const [activeClass,setActiveClass] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActiveClass('#')}  className={activeClass === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveClass('about')} className={activeClass === 'about' ? 'active' : ''} ><AiOutlineUser/></a>
      <a href='#services' onClick={()=>setActiveClass('services')} className={activeClass === 'services' ? 'active' : ''} ><RiServiceFill/></a>
      <a href='#experience' onClick={()=>setActiveClass('experience')} className={activeClass === 'experience' ? 'active' : ''} ><BiBook/></a>
      <a href='#contact' onClick={()=>setActiveClass('contact')} className={activeClass === 'contact' ? 'active' : ''} ><FcContacts/></a>
    </nav>
  )
}
