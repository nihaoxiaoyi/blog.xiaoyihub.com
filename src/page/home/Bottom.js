import React from "react";
import "./Buttom.css";

const HomeBottom = (props) => {
  const href = "https://beian.miit.gov.cn/";
  const target = "_blank";
  return (
    <a className="icp-link" href={href} target={target}>
      {props.city}ICP备{props.number}号
    </a>
  );
};

export default HomeBottom;
