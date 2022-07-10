import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import React from "react"
import { MainContent, Review } from "./components";
import { Snackbar,  } from "@mui/material";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const cx = classNames.bind(styles);

function Cart() {
  return (
    <div className={cx("wrapper")}>
      <Snackbar anchorOrigin={{horizontal: 'center', vertical: 'top'}} autoHideDuration={2000}>
        <Alert severity="success">success</Alert>
      </Snackbar>
      <MainContent />
      <Review />
    </div>
  );
}

export default Cart;
