import classNames from "classnames/bind";
import styles from './Menu.module.scss';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { setValue as setValueTag } from "./MenuSlice";


const cx = classNames.bind(styles)

function Menu() {

  const dispatch = useDispatch()
  const [value, setValue] = useState(0)
  const handleChange = (e, nextValue) => {
    setValue(prev => {
      dispatch(setValueTag(nextValue))
      return nextValue
    })
  }
  return ( 
    <div className={cx('wrapper')}>
      <Tabs value={value} onChange={handleChange} centered className={cx('menu')}>
        <Tab className={cx('menuItem')} label="SẢN PHẨM MỚI" />
        <Tab className={cx('menuItem')} label="SẢN PHẨM BÁN CHẠY" />
        <Tab className={cx('menuItem')} label="SẢN PHẨM PHỔ BIẾN" />
      </Tabs>
    </div>
  );
}

export default Menu;