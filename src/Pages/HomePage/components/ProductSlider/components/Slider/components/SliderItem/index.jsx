import classNames from "classnames/bind";
import styles from "./SliderItem.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/bundle";

const cx = classNames.bind(styles);

function SliderItem({ imgList }) {
  return (
    <div className={cx("wrapper")}>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        autoplay
        navigation={false}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {imgList.map((item, index) => {
          return (
            <SwiperSlide>
              <div className={cx("container")}>
                <img src={item} alt="" />
                <div className={cx("info")}>
                  <p className={cx("name")}>Chuck Taylor Classic</p>
                  <p className={cx("price")}>1,200,000 đ</p>
                </div>
                <button>Thêm vào giỏ hàng</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default SliderItem;
