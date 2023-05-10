import React from "react";
import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const colorOptions = props.data.colorOptions.map((item, pos) => {
    const classArr = [classes.ProductImage];
    if (item.imageUrl === props.currentPreviewImage) {
      classArr.push([classes.SelectedProductImage]);
    }
    return (
      <img
        key={pos}
        className={classArr.join(" ")}
        src={item.imageUrl}
        alt={item.styleName}
        onClick={() => props.onColorOptionClick(item.imageUrl)}
      ></img>
    );
  });

  const featureList = props.data.featureList.map((item, pos) => {
    const classArr = [classes.FeatureItem];
    if (pos === props.showHeartBeat) {
      classArr.push([classes.SelectedFeatureItem]);
    }
    return (
      <button
        key={pos}
        className={classArr.join(" ")}
        onClick={() => props.onFeatureClick(pos)}
      >
        {item}
      </button>
    );
  });
  return (
    <div className={classes.ProductData}>
      <h1 className={classes.ProductTitle}>{props.data.title}</h1>
      <p className={classes.ProductDescription}>{props.data.description}</p>
      <h3 className={classes.SelectionHeading}>Select Color</h3>
      <div>
        {colorOptions}
        <h3 className={classes.SelectionHeading}>Features</h3>
        <div>{featureList}</div>

        <button className={classes.PrimaryButton}>Buy</button>
      </div>
    </div>
  );
};

export default ProductDetails;
