import React from "react";
import "./container.style.scss";
const Container = (props) => {
  return <div className="Container">{props.children}</div>;
};

export default Container;