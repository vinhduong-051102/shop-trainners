import classNames from "classnames/bind"; 
import styles from './ChangePassword.module.scss'


const cx = classNames.bind(styles)  

function ChangePassword() {

  return ( 
    <div className={cx('wrapper')}>
      ChangePassword
    </div>
  );
}

export default ChangePassword;