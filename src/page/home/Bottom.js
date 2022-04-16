import React from "react";

const HomeBottom = (props) => {
  const href = "https://beian.miit.gov.cn/";
  const target = "_blank";
  const style = {
    color: "#61dafb",
    target: "_blank",
    bottom: "0px",
  };
  return (
    <a href={href} target={target} style={style}>
      {props.city}ICP备{props.number}号
    </a>
  );
};

export default HomeBottom;
