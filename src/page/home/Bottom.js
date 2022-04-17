import React from "react";

const HomeBottom = (props) => {
  const href = "https://beian.miit.gov.cn/";
  const target = "_blank";
  const style = {
    color: "#798d92",
    target: "_blank",
    bottom: "0px",
    textDecoration: "none"
  };
  return (
    <a href={href} target={target} style={style}>
      {props.city}ICP备{props.number}号
    </a>
  );
};

export default HomeBottom;
