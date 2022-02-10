import React from "react";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <div className={classes.title}>
      <h1>{props.pageTitle}</h1>
    </div>
  );
};

export default MainHeader;
