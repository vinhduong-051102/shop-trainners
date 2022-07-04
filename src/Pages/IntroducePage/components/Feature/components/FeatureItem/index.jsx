import classNames from "classnames/bind"; 
import styles from './FeatureItem.module.scss'

const cx = classNames.bind(styles)

function FeatureItem({ title, content }) {
  return ( 
    <div className={cx('wrapper')}>
      <h3 className={cx('title')}>{title}</h3>
      <p className={cx('content')}>{content}</p>
    </div>
  );
}

export default FeatureItem;