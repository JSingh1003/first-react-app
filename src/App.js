import { useState } from "react";

import classes from "./App.module.css";

import ProductPreview from "./ProductPreview/ProductPreview";
import ProductDetails from "./ProductDetails/ProductDetails";
import Topbar from "./Topbar/Topbar";
import ProductData from "./ProductData.js";

function App() {
  const [productData, setProductData] = useState(ProductData);
  const [currentPreviewImage, setCurrentPreviewImage] = useState(
    "https://imgur.com/iOeUBV7.png"
  );
  const [currentSelectedFeature, setCurrentSelectedFeature] = useState(0);

  const onColorOptionClick = (item) => {
    setCurrentPreviewImage(item);
  };

  const onFeatureClick = (pos) => {
    setCurrentSelectedFeature(pos);
  };
  return (
    <div className="App">
      <Topbar />
      <div className={classes.MainContainer}>
        <ProductPreview
          currentPreviewImage={currentPreviewImage}
          showHeartBeat={currentSelectedFeature === 1}
        />
        <ProductDetails
          data={productData}
          currentPreviewImage={currentPreviewImage}
          onColorOptionClick={onColorOptionClick}
          onFeatureClick={onFeatureClick}
          showHeartBeat={currentSelectedFeature}
        />
      </div>
    </div>
  );
}

export default App;
