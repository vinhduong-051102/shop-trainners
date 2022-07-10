import classNames from "classnames/bind";
import styles from "./Review.module.scss";
import { Rating, Avatar, Button } from "@mui/material";
import { useState } from "react";
import { UserReview } from "./components";

const cx = classNames.bind(styles);

function Review() {
  const [listFeelBack, setListFeelBack] = useState([])
  console.log("🚀 ~ file: index.jsx ~ line 11 ~ Review ~ listFeelBack", listFeelBack)
  const [value, setValue] = useState(0);
  const [feelback, setFeelback] = useState('')
  const handleSubmitFeelBack = () => {
    setListFeelBack(prevs => {
      return [...prevs, {
        rating: value,
        feelback
      }]
    })
  }
  const handleInputFeelBack = (e) => {
    setFeelback(e.target.value)
  }
  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("title")}>Đánh giá sản phẩm</h3>
      <div className={cx("feelback-input")}>
        <h3 className={cx("feelback-title")}>Nhập đánh giá</h3>
        <Rating
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          className={cx("rating")}
        />
        <div className={cx("container")}>
          <Avatar>V</Avatar>
          <input placeholder="Nhập đánh giá" onChange={handleInputFeelBack} value={feelback} />
          <Button variant="contained" onClick={handleSubmitFeelBack}>Gửi</Button>
        </div>
      </div>
      <div className={cx('users-review')}>
        <h3 className={cx("feelback-title")}>Đánh giá</h3>
        { listFeelBack.map((item, index) => {
          const { rating, feelback } = item
          return <UserReview rating={rating} key={index} feelback={feelback} />
        }) }
      </div>
    </div>
  );
}

export default Review;
