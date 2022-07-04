import classNames from "classnames/bind";
import styles from "./ProductSales.module.scss";
import { HeaderOnly } from "../Layout";
import { imgSaleList } from "../../../../assets/images/Sales";
import { Product } from "../../components/components";
import { Button } from '../../../../components'

const cx = classNames.bind(styles);

function ProductSales() {
  const ListName = [
    "Converse X Suicidal Tendencies Long",
    "Converse Metal Cons Pull Over Hoodie",
    "Converse Star Chevron Jogger",
    "Converse Collegiate Text SS Tee",
    "CSport Duffel",
    "Lil Duffel",
    "Speed 2 Backpack",
    "Poly Chuck Plus 1.0",
  ];
  const data = imgSaleList.map((item, index) => {
    return {
      url: item,
      name: ListName[index],
      price: 100000,
      discount: 50,
    };
  });

  return (
    <HeaderOnly title="Sản phẩm giảm giá">
      <div className={cx('wrapper')}>
        {data.map((item, index) => {
          return (
            <div className={cx("container")} key={index}>
              <Product url={item.url} name={item.name} price={item.price} discount={item.discount} />
            </div>
          );
        })}
        <Button>Xem tất cả</Button>
      </div>
    </HeaderOnly>
  );
}

export default ProductSales;
