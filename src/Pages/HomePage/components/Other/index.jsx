import classNames from "classnames/bind"; 
import styles from './Other.module.scss'
import { HeaderOnly } from "../Layout";
import { imgList } from "../../../../assets/images/Other";
import { Product } from '../../components/components'

const cx = classNames.bind(styles)

function Other() {
  return ( 
    <HeaderOnly title="Sản phẩm khác">
      <div className={cx('wrapper')}>
        { imgList.map((item, index) => {
          return(
            <div className={cx('container')} key={index}>
              <Product 
                url={item}
                name="Classic"
                price={200000}
              />
            </div>
          )
        }) }
      </div>
    </HeaderOnly>
  );
}

export default Other;