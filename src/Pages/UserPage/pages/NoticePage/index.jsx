import classNames from "classnames/bind";
import { MainLayout } from "../layout";
import { News } from "./components";
import styles from './NoticePage.module.scss';

const cx =classNames.bind(styles) 

function NoticePage() {
  return ( 
    <MainLayout>
      <div className={cx('wrapper')}>
        <News/>
      </div>
    </MainLayout>
  );
}

export default NoticePage;