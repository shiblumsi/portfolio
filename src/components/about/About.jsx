import React from 'react'
import Me from '../../assets/1.jpg'
import './About.css'
import {FaAward} from 'react-icons/fa'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {MdWork} from 'react-icons/md'

export default function About() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me' >
          <div className='about_me-image'>
            <img src={Me} alt='me' />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>0+ years working</small>
            </article>

            <article className='about_card'>
              <AiOutlineUsergroupAdd className='about_icon' />
              <h5>clients</h5>
              <small>0+ clients</small>
            </article>

            <article className='about_card'>
              <MdWork className='about_icon' />
              <h5>projects</h5>
              <small>10+ compleated</small>
            </article>
          </div>
          <p>Lorem Lorem30Lorem30 Lorem30Lorem30 Lorem30Lorem30Lorem30 Lorem30Lorem30 Lorem30Lorem30Lorem30 Lorem30Lorem30 Lorem30Lorem30Lorem30 Lorem30Lorem30 Lorem30</p>
          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}
