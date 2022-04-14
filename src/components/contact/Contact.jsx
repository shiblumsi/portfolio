import React from 'react'
import './Contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

import  { useRef } from 'react';
import emailjs from 'emailjs-com';


export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0lbtpvf', 'template_spqwdic', form.current, 'NbxdVCBxjTO6vJyw8')
      e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineMailOutline />
            <h4>Email</h4>
            <h5>shiblu.msi@gmail.com</h5>
            <a href='mailto:shiblu.msi@gmail.com' target='_blank' >Send a Message</a>
          </article>
          <article className='contact_option'>
            <BsMessenger />
            <h4>Messenger</h4>
            <h5>fb/shiblumsi</h5>
            <a href='https://m.me/shiblumsi' target='_blank' >Send a Message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+8801772115060</h5>
            <a href='https://api/whatsapp.com/send?phone=+8801772115060' target='_blank' >Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='name' required />
          <input type='text' name='email' placeholder='email' required />
          <textarea name='message' rows='5' placeholder='message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}
