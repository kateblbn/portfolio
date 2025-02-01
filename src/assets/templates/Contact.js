import React from 'react'
import { Link } from 'react-router-dom'
import last from '../img/icons/last.png'
import '../css/contact.css'
import github from '../img/icons/social/github.svg';
import linked from '../img/icons/social/linkedin.svg';
import gmail from '../img/icons/social/envelope.svg';
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from "react";
import Nav from './Nav';


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
  const thank = (loading) ? 'active' : 'noactive'

  return (
    <>
    {/* wow animate__animated animate__backInLeft animate__delay-1s */}
    <div className='contact__wrapper '>
      <Nav />
      <h2 className='contact__title animateCont'>Contact</h2>
      <div className='contact__descr animateLet'>Let's do something great together!</div>
      <p className='contact__descr-more animateMy'>
        My diverse experience and knowledge will help you achieve what you have in mind! <br /> Feel free to contact me.
      </p>
      <div className='media-position'>
        <div className='media__wrapper'>
          <a className='link-margin' href='mailto:kate.pidoni@gmail.com'>
            <div className='media__wrap animatelink1'>
              <img className='media__img' src={gmail} alt='social_media' />
              <div className='media__hidden-word'>Gmail</div>
            </div>
          </a>
          <a className='link-margin' href='https://github.com/kateblbn'>
            <div className='media__wrap animatelink2'>
              <img className='media__img' src={github} alt='social_media' />
              <div className='media__hidden-word'>Github</div>
            </div>
          </a>
          <a className='link-margin' href='https://www.linkedin.com/in/katerina-balabushkina/'>
            <div className='media__wrap animatelink3'>
              <img className='media__img' src={linked} alt='social_media' />
              <div className='media__hidden-word'>LinkedIn </div>
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
              <input ref={nameRef} className='name brd animatelink1' type='text' placeholder='First Name*' />
              <input ref={lastNameRef} className='lastname brd animatelink2' type='text' placeholder='Last Name*' />
              <input ref={emailRef} className='email brd animatelink3' type='email' placeholder='Email*' />
              <textarea ref={messageRef} className='text brd animatelink4' type='text' placeholder='Your text here.. 😇 ' />
              <button className='btn animatelink5' disabled={loading}>SEND</button>
            </form>
            <div className={thank}>
              <div className='thank-border'>
                <div onClick={() => setLoading(false)} className='thank-close'>X</div>
                <p className='thank-text'>Thank you.<br />Form sending successfull. <br /> Check your email.</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className='works__link'>
        <Link className='link-last' to='/my-portfolio-works/works'>
          <div className='wrap_link-img'>
            <img className='works__link-img' src={last} alt='last' />
            <div className='link-last-about link-next-last'> Works</div>
          </div>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Contact

