import React from 'react'
import CV from '../../assets/cv.pdf'

export default function CTA() {
  return (
    <div className='cta'>
        <a className='btn' href={CV} download>Download cv</a>
        <a href='#contact' className='btn btn-primary'>contacted me</a>
    </div>
  )
}
