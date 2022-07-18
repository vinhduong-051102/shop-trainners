import classNames from "classnames/bind"; 
import styles from './Avatar.module.scss'
import { Avatar as AvatarMui } from "@mui/material";
import { deepOrange } from '@mui/material/colors'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles)  

function Avatar() {
  return ( 
    <div className={cx('wrapper')}>
      <AvatarMui sx={{ bgcolor: deepOrange[500] }} className={cx('avatar')}>V</AvatarMui>
      <h4>Vinh</h4>
    </div>
  );
}

export default Avatar;