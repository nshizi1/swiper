// import Swiper core and required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import {useRef} from 'react';

import seven from '../images/007.jpg';
import eight from '../images/008.jpg';
import nine from '../images/009.jpg';
import ten from '../images/010.jpg';
import eleven from '../images/011.jpg';
import twelve from '../images/012.jpg';
import thirteen from '../images/013.jpg';
import fourteen from '../images/014.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Home() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      navigation={true}
      breakpoints={{
        768:{
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024:{
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1920:{
            slidesPerView: 4,
            spaceBetween: 40,
        },
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      modules={[Autoplay, Navigation, Pagination]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
    >
      <SwiperSlide><img src={seven} alt="lorem" /><h1>Nel Ngabo</h1></SwiperSlide>
      <SwiperSlide><img src={eight} alt="lorem" /><h1>DJI RSC</h1></SwiperSlide>
      <SwiperSlide><img src={nine} alt="lorem" /><h1>DJI RSC2</h1></SwiperSlide>
      <SwiperSlide><img src={ten} alt="lorem" /><h1>DJI RSC3</h1></SwiperSlide>
      <SwiperSlide><img src={eleven} alt="lorem" /><h1>Nshizi sitting</h1></SwiperSlide>
      <SwiperSlide><img src={twelve} alt="lorem" /><h1>Nshizi with phone</h1></SwiperSlide>
      <SwiperSlide><img src={thirteen} alt="lorem" /><h1>NYP and Nshizi</h1></SwiperSlide>
      <SwiperSlide><img src={fourteen} alt="lorem" /><h1>Nshizi at school</h1></SwiperSlide>
              
    <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
        <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
    </div>
     
    </Swiper>
  )
}

export default Home;