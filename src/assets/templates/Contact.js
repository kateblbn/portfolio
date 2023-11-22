import React from 'react'
import { Link } from 'react-router-dom'
import last from '../img/icons/last.png'
import '../css/contact.css'
import github from '../img/icons/social/github.svg';
import linked from '../img/icons/social/linkedin.svg';
import gmail from '../img/icons/social/envelope.svg';
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from "react";


function Contact() {
  const emailRef = useRef();
  const nameRef = useRef();
  const lastNameRef = useRef()
  const messageRef = useRef();

  const [loading, setLoading] = useState(false);

  useEffect(() => emailjs.init('wOUVfkJVdV-RXW-TV'), []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = 'service_a9r4dsv';
    const templateId = 'template_test'
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        recipient: emailRef.current.value,
        lastName: lastNameRef.current.value,
        message: messageRef.current.value
      });
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
      e.preventDefault();
      nameRef.current.value = ''
      emailRef.current.value = ''
      lastNameRef.current.value = ''
      messageRef.current.value = ''

    }
  }
  const thank = (loading) ? 'active' : 'noactive' //!!!!!!!!!!!!!!!!!!!!!!!!

  return (
    <div className='contact__wrapper'>
      <h2 className='contact__title'>Contact</h2>
      <div className='contact__descr'>Let's do something great together!</div>
      <p className='contact__descr-more'>
        My diverse experience and knowledge will help you achieve what you have in mind! <br /> Feel free to contact me.
      </p>
      <div className='media-position'>
        <div className='media__wrapper'>
          <a className='link-margin' href='mailto:kate.pidoni@gmail.com'>
            <div className='media__wrap'>
              <img className='media__img' src={gmail} alt='social_media' />
              Gmail
            </div>
          </a>
          <a className='link-margin' href='https://github.com/kateblbn'>
            <div className='media__wrap'>
              <img className='media__img' src={github} alt='social_media' />
              Github
            </div>
          </a>
          <a className='link-margin' href='https://www.linkedin.com/in/katerina-balabushkina/'>
            <div className='media__wrap'>
              <img className='media__img' src={linked} alt='social_media' />
              LinkedIn
            </div>
          </a>
        </div>

      </div>
      <div>
        <div className='contact-center'>
        </div>
        <div>
          <section className='form-style'>
            <form onSubmit={handleSubmit}>
              <input ref={nameRef} className='name brd' type='text' placeholder='First Name*' />
              <input ref={lastNameRef} className='lastname brd' type='text' placeholder='Last Name*' />
              <input ref={emailRef} className='email brd' type='email' placeholder='Email*' />
              <textarea ref={messageRef} className='text brd' type='text' placeholder='Your text here.. 😇 ' />
              <button className='btn' disabled={loading}>SEND</button>
            </form>
            <div className={thank}>
              <div className='thank-border'>
                <div onClick={() => setLoading(false) } className='thank-close'>X</div>
                <p className='thank-text'>Thank you.<br />Form sending successfull. <br /> Check your email.</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className='works__link'>
        <Link className='link-last' to='/works'>
          <div className='wrap_link-img'>
            <img className='works__link-img' src={last} alt='last' />
            <div className='link-last-about link-next-last'> Works</div>
          </div>
        </Link>
      </div>


    </div>
  )
}

export default Contact

