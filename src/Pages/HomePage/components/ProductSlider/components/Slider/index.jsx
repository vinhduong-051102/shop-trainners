import classNames from "classnames/bind";
import styles from "./Slider.module.scss";
import { useSelector } from 'react-redux'
import { selectValue } from '../Menu/MenuSlice'
import { SliderItem } from "./components";
import {
  productSliderImg1,
  productSliderImg2,
  productSliderImg3,
  productSliderImg4,
  productSliderImg5,
  productSliderImg6,
  productSliderImg7,
  productSliderImg8,
  productSliderImg9,
  productSliderImg10,
  productSliderImg11,
  productSliderImg12,
  productSliderImg13,
  productSliderImg14,
  productSliderImg15,
  productSliderImg16,
} from "@/assets/images/Shoes/ProductSlider";

const cx = classNames.bind(styles);

function Slider() {
  const value = useSelector(selectValue)
  const imgList = [
    [
      productSliderImg1,
      productSliderImg2,
      productSliderImg3,
      productSliderImg4,
      productSliderImg5,
      productSliderImg6,
      productSliderImg7,
      productSliderImg8,
    ],
    [
      productSliderImg9,
      productSliderImg10,
      productSliderImg11,
      productSliderImg12,
      productSliderImg13,
      productSliderImg14,
      productSliderImg15,
      productSliderImg16,
    ],
    [
      productSliderImg1,
      productSliderImg2,
      productSliderImg3,
      productSliderImg4,
      productSliderImg5,
      productSliderImg6,
      productSliderImg7,
      productSliderImg8,
    ],
  ];
  return (
    <div className={cx("wrapper")}>
      <SliderItem imgList={imgList[value]} />
    </div>
  );
}

export default Slider;
