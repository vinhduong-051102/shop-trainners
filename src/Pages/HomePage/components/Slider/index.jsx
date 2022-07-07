import classNames from "classnames/bind";
import styles from './Slider.module.scss'
import { slide1, slide2, slide3 } from '@/assets/images/Slider'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle'

const cx = classNames.bind(styles)



function Slider() {
  return (
    <div className={cx('wrapper')}>
      <Swiper
        spaceBetween={30}
        loop
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect={"fade"}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
  
      </Swiper>
    </div>
  );
}

export default Slider;