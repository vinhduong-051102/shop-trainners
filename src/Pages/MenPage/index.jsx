import classNames from "classnames/bind";
import styles from "./MenPage.module.scss";
import { SideBar } from "../components";
import { imgList } from "@/assets/images/Other";
import { Content } from "./components";

const cx = classNames.bind(styles);

function MenPage() {
  const sidebarData = [
    {
      title: "SẢN PHẨM",
      content: [
        { url: imgList[0], title: "Chuck Taylor Classic", price: 1200000 },
        { url: imgList[1], title: "Chuck Taylor Classic", price: 1200000 },
        { url: imgList[2], title: "Chuck Taylor Classic", price: 1200000 },
      ],
    },
    {
      title: "BÀI VIẾT MỚI NHẤT",
      content: [
        { url: imgList[0], title: "Chuck Taylor Classic",  },
        { url: imgList[1], title: "Chuck Taylor Classic",  },
        { url: imgList[2], title: "Chuck Taylor Classic",  },
      ]
    }
  ];
  const contentData = [
    {
      url: imgList[0],
      name: "Chuck Taylor Classic",
      price: 500000
    },
    {
      url: imgList[1],
      name: "Chuck Taylor Classic",
      price: 500000
    },
    {
      url: imgList[2],
      name: "Chuck Taylor Classic",
      price: 500000
    },
    {
      url: imgList[3],
      name: "Chuck Taylor Classic",
      price: 500000
    },
    {
      url: imgList[4],
      name: "Chuck Taylor Classic",
      price: 500000
    },
    {
      url: imgList[4],
      name: "Chuck Taylor Classic",
      price: 500000
    },
    {
      url: imgList[4],
      name: "Chuck Taylor Classic",
      price: 500000
    },
    {
      url: imgList[4],
      name: "Chuck Taylor Classic",
      price: 500000
    },
    {
      url: imgList[4],
      name: "Chuck Taylor Classic",
      price: 500000
    },
    {
      url: imgList[4],
      name: "Chuck Taylor Classic",
      price: 500000
    },
    {
      url: imgList[4],
      name: "Chuck Taylor Classic",
      price: 500000
    }
  ]
  return (
    <div className={cx("wrapper")}>
      <SideBar sidebarItems={sidebarData} />
      <Content contentItems={contentData} />
    </div>
  );
}

export default MenPage;
