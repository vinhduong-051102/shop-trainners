import classNames from "classnames/bind"; 
import styles from './PageContent.module.scss';
import { Product } from "@/Pages/components";

const cx = classNames.bind(styles)  

function PageContent({ currContent }) {
  return ( 
    <div className={cx('wrapper')}>
      {currContent.map((item, index) => {
          const { url, name, price } = item;
          return (
            <div className={cx("container")} key={index}>
              <Product url={url} name={name} price={price} />
            </div>
          );
        })}
    </div>
  );
}

export default PageContent;