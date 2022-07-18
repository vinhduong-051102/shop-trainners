import classNames from "classnames/bind"; 
import styles from './Text.module.scss'

const cx = classNames.bind(styles)  

function Text({ children, label }) {
  return ( 
    <div className={cx('wrapper')}>
      <div className={cx('label')}>{label}</div>
      <div className={cx('text')}>
        { children }
      </div>
    </div>
  );
}

export default Text;