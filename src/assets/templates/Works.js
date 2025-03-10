import React from 'react'
import last from '../img/icons/last.png'
import next from '../img/icons/next.png'
import { Link } from 'react-router-dom'
import Nav from './Nav'

import dictionary from '../img/works/dictionary.jpg';
import bmi from '../img/works/bmi.jpg';
import coffee from '../img/works/coffee.jpg';
import pulse from '../img/works/pulse.jpg';
import photo from '../img/works/photo.jpg';
import uber from '../img/works/uber.jpg';
import weather from '../img/works/weather.jpg';
import shop from '../img/works/shop.jpg';
import consultant from '../img/works/consultant';
import oculus from '../img/works/oculus';
import credit from '../img/works/credit';




function Works() {
  const data = [
    {
      link: 'https://kateblbn.github.io/BMI-App/',
      img: bmi,
      title: 'Calculator BMI',
      descr: 'Calculate your BMI'
    },
    {
      link: 'https://kateblbn.github.io/Dictionary-App-API-React',
      img: dictionary,
      title: 'Dictionary',
      descr: 'Awesome project where you can search meaning of any English word'
    },
    {
      link: 'https://kateblbn.github.io/rockcoffee/',
      img: coffee,
      title: 'Rockcoffee Bar',
      descr: 'Website for small bar in London'
    },
    {
      link: 'https://kateblbn.github.io/weather-app-API/',
      img: weather,
      title: 'Weather app',
      descr: 'Check weather for your location'
    },
    {
      link: 'https://kateblbn.github.io/Fashion-Multi-Store-API/',
      img: shop,
      title: 'Multistore',
      descr: 'Unique multishop where you can buy what ever you want.'
    },
    {
      link: 'https://kateblbn.github.io/Search-Photos-API/',
      img: photo,
      title: 'Photo Galary',
      descr: 'Try to find photo for your taste! you can use category or just write name.'
    },
    {
      link: 'https://kateblbn.github.io/uber-site/',
      img: uber,
      title: 'Uber website',
      descr: 'Landing page for Гber company'
    },
    {
      link: 'https://kateblbn.github.io/Pulse/',
      img: pulse,
      title: 'Heart rate monitors website',
      descr: 'Online store of dealers of heart rate monitors from North Asia'
    },
    {
      link: 'https://kateblbn.github.io/consultant/',
      img: consultant,
      title: 'Heart rate monitors website',
      descr: 'Expertise. Dedication. Results. Legal challenges require precision and strategy. Experienced attorneys specialize in resolving disputes—whether personal, business, or complex litigation.'
    }, 
    {
      link: 'https://kateblbn.github.io/Oculus/',
      img: oculus,
      title: 'Heart rate monitors website',
      descr: 'Expertise. Dedication. Results. Legal challenges require precision and strategy. Experienced attorneys specialize in resolving disputes—whether personal, business, or complex litigation.'
    },
    {
      link: 'https://kateblbn.github.io/Credit/',
      img: credit,
      title: 'Heart rate monitors website',
      descr: 'Get the Credit You Deserve. Fast, secure, and hassle-free credit solutions tailored to your needs. Whether for personal or business use, we make borrowing simple and transparent. Apply today and take control of your financial future!'
    },
    
  ]

  return (
    <div className='works__wrapper-gen'>
      <Nav />
      <h2 className='works__title wow animate__animated animate__bounceInDown animate__delay-1s'>My Portfolio</h2>
      <p className='works__descr wow animate__animated animate__bounceInDown animate__delay-2s'> Here is you can find my awesome works! </p>
      <div className='works__wrapper-wrap'>
        {data.map(el => {
          return (
            <div className='works__wrapper wow animate__animated animate__bounceInDown animate__delay-0.5s'>
              <div className='works__wrap-item wow animate__animated animate__bounce animate__delay-1s animate__repeat-2'>
                <div className='wrap-link-img'>
                  <img className='works__wrap-link-img' src={el.img} alt='work' />
                </div>
                <div className='wrap-link-descr'>
                  <a className='link' href={el.link}>
                    <div className='works-inside-link'>
                      <h3 className='works-inside-link-title'>{el.title}</h3>
                      <p className='works-inside-link-descr'>{el.descr}</p>
                      <div className='works-inside-link-wrap'>
                        View site
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          )
        })}

      </div>
      <div className='works__link-wrap'>
        <div className='works__link'>
          <Link className='link-last' to='/portfolio/about'>
            <div className='wrap_link-img'>
              <img className='works__link-img' src={last} alt='last' />
              <div className='link-next-about link-next-last'> About</div>
            </div>
          </Link>
        </div>
        <div className='works__link'>
          <Link className='link-next' to='/portfolio/contact'>
            <div className='wrap_link-img'>
              <div className='link-next-about link-next-last'> Contact</div>
              <img className='works__link-img' src={next} alt='next' />
            </div>

          </Link>
        </div>
      </div>

    </div >
  )
}

export default Works





















// function Works() {
//   return (
//     <div className='works__wrapper'>
//       {/* <Nav /> */}
//       <h2 className='works__title'>My Portfolio</h2>
//       <p className='works__descr'> Here is you can find my awesome works </p>
//       <div className='works__wrapper'>
//         <div className='works__wrap-item'>
//           <a className='works__link' href='https://dictionary.sites-co.com/' >
//             <div className='wrap-link-img'>
//               <img className='works__wrap-link-img' src={dictionary} alt='work' />
//             </div>


//           </a>
//           <div className='wrap-link-descr'>
//             <a className='link' href='https://dictionary.sites-co.com/'>
//               <div className='works-inside-link'>
//                 <h3 className='works-inside-link-title'>Dictionary</h3>
//                 <p className='works-inside-link-descr'>Awesome project where you can search meaning of any English word</p>
//                 <div className='works-inside-link-wrap'>
//                   View site
//                 </div>
//               </div>
//             </a>
//           </div>

//         </div>
//       </div>


//       <div className='works__link-wrap'>
//         <div className='works__link'>
//           <Link className='link-last' to='/about'>
//             <div className='wrap_link-img'>
//               <img className='works__link-img' src={last} alt='last' />
//               <div className='link-next-about'> About</div>
//             </div>
//           </Link>
//         </div>
//         <div className='works__link'>
//           <Link className='link-next' to='/contact'>
//             <div className='wrap_link-img'>
//               <div className='link-next-about'> Contact</div>
//               <img className='works__link-img' src={next} alt='next' />
//             </div>

//           </Link>
//         </div>
//       </div>

//     </div >
//   )
// }

// export default Works