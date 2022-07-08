import classNames from "classnames/bind";
import styles from "./Sort.module.scss";
import { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Tippy from "@tippyjs/react/headless";
import { Popper } from "@/components";
import { useDispatch } from "react-redux";
import { changeOptionSort } from "@/Pages/MenPage/MenPageSlice";

const cx = classNames.bind(styles);

function Sort() {
  const dispatch = useDispatch()
  const [optionValue, setOptionValue] = useState(0);
  const handleSelectOptionValue = (e) => {
    const option = e.target.value
    dispatch(changeOptionSort(option))
    setOptionValue(option);
  };
  return (
    <div className={cx("wrapper")}>
      <Tippy
        render={(attrs) => (
          <Popper>
            <p>
              Sắp xếp
            </p>
          </Popper>
        )}
        placement="top"
      >
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <NativeSelect defaultValue={optionValue} onChange={handleSelectOptionValue}>
              <option value={0}>Theo mặc định</option>
              <option value={1}>Theo giá tăng dần</option>
              <option value={-1}>Theo giá giảm dần</option>
            </NativeSelect>
          </FormControl>
        </Box>
      </Tippy>
    </div>
  );
}

export default Sort;
