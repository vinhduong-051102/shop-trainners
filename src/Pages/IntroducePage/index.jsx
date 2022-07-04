import classNames from "classnames/bind"; 
import styles from './IntroducePage.module.scss';
import { Content, Banner, Feature } from "./components";

const cx = classNames.bind(styles)

function IntroducePage() {
  return ( 
    <div className={cx('wrapper')}>
      <Banner />
      <Content />
      <Feature />
    </div>
  );
}

export default IntroducePage;