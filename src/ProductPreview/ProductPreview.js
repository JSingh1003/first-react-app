import React from "react";
import classes from "./ProductPreview.module.css";

const ProductPreview = (props) => {
  const curHour =
    new Date().getHours() > 9
      ? new Date().getHours()
      : "0" + new Date().getHours();

  const curMinute =
    new Date().getMinutes() > 9
      ? new Date().getMinutes()
      : "0" + new Date().getMinutes();
  return (
    <div className={classes.ProductPreview}>
      <img
        className={classes.ProductTitle}
        src={props.currentPreviewImage}
        alt="Prodcut Preview"
      ></img>

      {props.showHeartBeat ? (
        <div className={classes.HeartBeatSelection}>
          <i className="fa-solid fa-heart-pulse"></i>
          <p>78</p>
        </div>
      ) : (
        <div className={classes.TimeSelection}>
          <p>{`${curHour}:${curMinute}`}</p>
        </div>
      )}
    </div>
  );
};

export default ProductPreview;
