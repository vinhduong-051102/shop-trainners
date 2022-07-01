import classNames from "classnames/bind";
import styles from './EmptyLayout.module.scss';

const cx = classNames.bind(styles)

function EmptyLayout({ children }) {
  return ( 
    <div className={cx('wrapper')}>
      <div className={cx('children')}>{ children }</div>
    </div>
  );
}

export default EmptyLayout;