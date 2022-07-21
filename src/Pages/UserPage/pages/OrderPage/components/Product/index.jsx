import { Button } from "@mui/material";
import classNames from "classnames/bind"; 
import styles from './Product.module.scss'

const cx = classNames.bind(styles)  

function Product() {
  return ( 
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <h4 className={cx('status')}>
          <span>Trạng thái: </span>
          Đang chờ lấy hàng
        </h4>
      </div>
      <div className={cx('product')}>
        <div className={cx('img')}>
          <img src='https://picsum.photos/200/300' alt=''/>
        </div>
        <div className={cx('info')}>
          <p className={cx('name')}>
          Sách - Combo 7 Thói Quen Của Bạn Trẻ Thành Đạt 50893 + Thực Hành 7 Thói Quen Của Bạn Trẻ Thành Đạt 49699 - First News
          </p>
          <p className={cx("amount")}>Số lượng: 1</p>
          <h5 className={cx("price")}><span>Giá: </span>{Number(10000).toLocaleString()} đ</h5>
          <div className={cx("cancel-btn")}><Button variant="contained" color="error">Huỷ đơn hàng</Button></div>
        </div>
      </div>
    </div>
  );
}

export default Product;