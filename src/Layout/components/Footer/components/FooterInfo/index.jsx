import classNames from "classnames/bind";
import styles from "./FooterInfo.module.scss";
import { FooterInforItem } from "./components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

const cx = classNames.bind(styles);

function FooterInfo() {
  return (
    <div className={cx("wrapper")}>
      <FooterInforItem
        title="Giới thiệu"
        content={{
          content:
            "Chào mừng bạn đến với ngôi nhà Converse! Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh",
          styles: { fontSize: "15px", color: "#adb5bd", marginBottom: "16px", lineHeight: "1.4" },
        }}
      />
      <FooterInforItem
        title="Địa chỉ"
        content={{
          content: (
            <>
              <div style={{ marginBottom: "16px", display: "flex", justifyContent: "flex-start" }}>
                <i>
                  <FontAwesomeIcon icon={faLocationDot} />
                </i>
                <p style={{ paddingLeft: "10px" }}>128 Nguyễn Trãi,Thanh Xuân,Hà Nội</p>
              </div>
              <div style={{ marginBottom: "16px", display: "flex", justifyContent: "flex-start" }}>
                <i>
                  <FontAwesomeIcon icon={faPhone} />
                </i>
                <p style={{ paddingLeft: "10px" }}>0338861820</p>
              </div>
              <div style={{ marginBottom: "16px", display: "flex", justifyContent: "flex-start" }}>
                <i>
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
                <p style={{ paddingLeft: "10px" }}>nguyenhanhhp1974@gmail.com</p>
              </div>
            </>
          ),
          styles: {
            fontSize: "15px",
            color: "#adb5bd",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          },
        }}
      />
      <FooterInforItem
        title="Menu"
        content={{
          content: (
            <>
              <div style={{marginBottom: "16px"}}>
                <a style={{ padding: "0 12px 12px 0" }} href="#a">
                  Trang chủ
                </a>
                <a style={{ padding: "0 12px 12px 0" }} href="#a">
                  Cửa hàng
                </a>
              </div>

              <div style={{marginBottom: "16px"}}>
                <a style={{ padding: "0 12px 12px 0" }} href="#a">
                  Giới thiệu
                </a>
                <a style={{ padding: "0 12px 12px 0" }} href="#a">
                  Tin tức
                </a>
              </div>

              <a style={{ padding: "0 12px 12px 0" }} href="#a">
                Liên hệ
              </a>
            </>
          ),
          styles: {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: 'column',
            justifyContent: "space-around"

          },
        }}
      />
      <FooterInforItem 
        title="Mạng xã hội"
        content= {{
          content: (
            <>
              <div><FontAwesomeIcon icon={faFacebook} /></div>
              <div style={{margin: "0 30px"}}><FontAwesomeIcon icon={faInstagram} /></div>
              <div><FontAwesomeIcon icon={faTwitter} /></div>

            </>
          ),
          styles: {color: "#16a4fb", fontSize: '34px', display: 'flex'}
        }}
      />
    </div>
  );
}

export default FooterInfo;
