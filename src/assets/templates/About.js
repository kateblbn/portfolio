import React from 'react'
import { Link } from 'react-router-dom'
import last from '../img/icons/last.png'
import next from '../img/icons/next.png'
import html from '../img/icons/icons8-html-50.png'
import css from '../img/icons/icons8-css-50.png'
import js from '../img/icons/icons8-javascript-50.png'
import node from '../img/icons/icons8-node-js-96.png'
import php from '../img/icons/icons8-php-50.png'
import react from '../img/icons/icons8-react-48.png'
import sql from '../img/icons/icons8-sql-100.png'
import sass from '../img/icons/icons8-sass-50.png'
import Nav from './Nav'


function About() {
  return (
    <div className='about__wrapper'>
      <Nav/>
      <div className='non-formal__joke'>
        <p >"How do I know if you are a developer?" <br />
          You spend more time debugging than developing 😄 </p>
      </div>
      <h2 className='about__title'> I'm a <span className='title-bold under'>Web-developer</span> based in Oslo, Norway</h2>
      <p className='about__descr'>I do what I love and It's inspires me.</p>
      <div className='about__skills-wrap'>
        <h3 className='about__skills-title'>My Skills</h3>
        <p className='about__skills-descr'>I have a diverce set of skills, randing from design, to : </p>
        <div className='skills__wrapper'>
          <div className='skills__wrap animateHtml'>HTML
            <img className='skills__wrap-img' src={html} alt='html' />
          </div>
          <div className='skills__wrap animateCss '>CSS
            <img className='skills__wrap-img' src={css} alt='css' />
          </div>
          <div className='skills__wrap animateJs'>JavaScript
            <img className='skills__wrap-img' src={js} alt='js' />
          </div>
          <div className='skills__wrap animatePhp'>PHP
            <img className='skills__wrap-img' src={php} alt='php' />
          </div>
          <div className='skills__wrap animateReact'>React js
            <img className='skills__wrap-img' src={react} alt='react' />
          </div>
          <div className='skills__wrap animateNode'>Node Js
            <img className='skills__wrap-img' src={node} alt='node' />
          </div>
          <div className='skills__wrap animateSass'>SASS/SCSS
            <img className='skills__wrap-img' src={sass} alt='sass' />
          </div>
          <div className='skills__wrap animateSql'>SQL
            <img className='skills__wrap-img' src={sql} alt='sql' />
          </div>
        </div>
        <div>
          <p className='skills-plan'>By working as a team we can achieve success. Your plan, my persistence.</p>
        </div>


      </div>
      <div className='about__link-wrap'>
        <div className='about__link'>
          <Link className='link-last' to='/'>
            <div className='wrap_link-img'>
              <img className='about__link-img ' src={last} alt='last' />
              <div className='link-next-about link-next-last'> Home</div>
            </div>

          </Link>
        </div>
        <div className='about__link'>
          <Link className='link-next' to='/works'>
            <div className='wrap_link-img'>
              <div className='link-next-about link-next-last'> Works</div>
              <img className='about__link-img' src={next} alt='next' />
            </div>

          </Link>

        </div>
      </div>
    </div>
  )
}

export default About