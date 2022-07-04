import classNames from "classnames/bind";
import styles from './HeaderOnly.module.scss';
import { Header } from './components'

const cx = classNames.bind(styles)

function HeaderOnly({ children, title }) {
  return ( 
    <div className={cx('wrapper')}>
      <Header title={title} />
      <div className={cx('spacer')}></div>
      { children }
    </div>
  );
}

export default HeaderOnly;