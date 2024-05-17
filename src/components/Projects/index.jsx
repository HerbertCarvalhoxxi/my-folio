import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './projects.scss'

import Img1 from '../../assets/ecommerce.png'
import Img2 from '../../assets/stock.png'
import Img3 from '../../assets/psico.png'
import Img4 from '../../assets/weather.png'
import Img5 from '../../assets/smartfit.png'


export default function Projects() {
    return(
      <section id='projects'>
        <h2>Meus projetos</h2>
        <div className='projects-container'>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
            <img src={Img1} alt="" />
            <p>Projeto e-commerce</p>
            <ion-icon name="eye-outline" onClick={()=> window.open('https://github.com/HerbertCarvalhoxxi/ECommerce')}></ion-icon>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Img2} alt="" />
            <p>Controle de estoque</p>
            <ion-icon name="eye-outline" onClick={()=> window.open('https://github.com/HerbertCarvalhoxxi/Stock-Control')}></ion-icon>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Img3} alt="" />
            <p>Portfólio profissional</p>
            <ion-icon name="eye-outline" onClick={()=> window.open('https://github.com/HerbertCarvalhoxxi/Ed-Folio')}></ion-icon>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Img4} alt="" />
            <p>Weather app</p>
            <ion-icon name="eye-outline" onClick={()=> window.open('https://github.com/HerbertCarvalhoxxi/Weather-App')}></ion-icon>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Img5} alt="" />
            <p>Projeto smartfit</p>
            <ion-icon name="eye-outline" onClick={()=> window.open('https://github.com/HerbertCarvalhoxxi/SmartFit-Teste')}></ion-icon>
        </SwiperSlide>
      </Swiper>
      <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
    </div>
  </section>  
    )
}