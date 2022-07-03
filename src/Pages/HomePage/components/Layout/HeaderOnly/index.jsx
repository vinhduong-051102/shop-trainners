import classNames from "classnames/bind";
import styles from './HeaderOnly.module.scss';
import { Header } from './components'

const cx = classNames.bind(styles)

function HeaderOnly({ children }) {
  return ( 
    <div className={cx('wrapper')}>
      <Header title="header" />
      { children }
    </div>
  );
}

export default HeaderOnly;