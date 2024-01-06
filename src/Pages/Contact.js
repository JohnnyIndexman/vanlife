import React from 'react'
import { IoLocation } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

function Contact() {
  return (
    <div className='contact'>

      <div className='us'>
        <form>
          <h1>
            Contact Us!!!
          </h1>
          <p>Reach out to us for any enquiry</p>
          <input type='text'
            placeholder='Full name'
          />
          <input type='text'
            placeholder='Your email'
          />
          <textarea placeholder='Message' />
          <button type='submit'
            className='contact-button'
          >
            submit
          </button>

        </form>

        <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.9542218804236!2d-95.99328252531492!3d30.095497374897867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8646cc0a5cf0f4f1%3A0x103242a0436c12b2!2sPrairie%20View%20A%26M%20University!5e0!3m2!1sen!2sng!4v1704387157969!5m2!1sen!2sng"
          style={{ border: 0, width: '450px', height: "420px", alignSelf: 'center' }}
          allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade" className='map'>
        </iframe>
        </div>
      </div>

      <div className='icon'>
        <div className='location'>
          <IoLocation size='40px'/>
          <p><span>Location</span><br />
            Prairie View A&M University
          </p>
        </div>
        <div className='location'>
          <MdAttachEmail size='40px'/>
          <p><span>Email</span><br />
            vanlife2gmail.com
          </p>
        </div>
        <div className='location'>
        <FaPhoneVolume size='40px'/>
          <p><span>Phone</span><br />
            +234 701-203-4567
          </p>
        </div>
      </div>

    </div>
  )
}

export default Contact