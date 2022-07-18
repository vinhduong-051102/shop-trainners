import classNames from "classnames/bind"; 
import styles from './Button.module.scss'

const cx = classNames.bind(styles)  

function Button({ children, style={}, onClick = () => {} }) {
  return ( 
    <div className={cx('wrapper')}>
      <button style={style} onClick={onClick}>
        <p>{children}</p>
      </button>
    </div>
  );
}

export default Button;