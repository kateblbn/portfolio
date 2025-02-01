import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import next from '../img/icons/next.png'
import '../css/css.css';
import me from '../img/me.jpg'

function Home() {
  const [text1, setText1] = useState('HELLO');
  const [text2, setText2] = useState('I AM')
  const [text3, setText3] = useState('KATE')

  const changeText1 = (text1 === 'WORKS') ? 'home__title  up' : 'home__title ';
  const changeText2 = (text2 === 'ABOUT') ? 'home__title  up' : 'home__title ';
  const changeText3 = (text3 === 'CONTACT') ? 'home__title  up' : 'home__title ';

  return (
    <div className='home__wrapper'>
      <div className='home__wrap-title'>

        <div className="animate">
          <h1 onMouseOver={() => setText1('WORKS')} onMouseOut={() => setText1('HELLO')} className={changeText1}>
            <Link className={changeText1} to='/my-portfolio-works/works'>{text1}</Link>
          </h1>
        </div>
        <div className="animate2">
          <h2 onMouseOver={() => setText2('ABOUT')} onMouseOut={() => setText2('I AM')} className={changeText2}>
            <Link className={changeText2} to='/my-portfolio-works/about'>{text2}</Link>
          </h2>
        </div>
        <div className="animate3">
          <h2 onMouseOver={() => setText3('CONTACT')} onMouseOut={() => setText3('Kate')} className={changeText3}>
            <Link className={changeText3} to='/my-portfolio-works/contact'>{text3}</Link>
          </h2>
        </div>
      </div>
      <div className='home__image'>
        <img className='home__image-img' src={me} alt="me" />
      </div>
      <div className='home__link'>
        {/* setSweap(true) */}
        <Link className='link-next'
          to='/my-portfolio-works/about'>
          <div className='wrap_link-img'>
            <div className='link-next-about link-next-last'> About</div>
            <img className='home__link-img' src={next} alt='next' />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home