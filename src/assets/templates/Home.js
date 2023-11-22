import React from 'react'
import { Link } from 'react-router-dom'
import next from '../img/icons/next.png'
import '../css/css.css'

function Home() {
  return (
    <div className='home__wrapper'>
      <div className='home__wrap-title'>
        <h1 className='home__title'>HELLO</h1>
        <h2 className='home__title'>I am</h2>
        <h3 className='home__title-name'>Kate</h3>
      </div>
      <div className='home__link'>
        <Link className='link-next' to='about'>
          <div className='wrap_link-img'>
            <div className='link-next-about'> About</div>
            <img className='home__link-img' src={next} alt='next' />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home