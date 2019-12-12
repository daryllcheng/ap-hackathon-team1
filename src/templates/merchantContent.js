import React from "react";
import ProductTiles from "../templates/productTiles";
import "../style/Home.scss";

const MerchantContent = props => (
  <div style={{ marginBottom: "60px" }}>
    <div className="title">
      <span className="merchantTitle">{props.title}</span>
    </div>
    <div className="merchantSubtitle">{props.subtitle}</div>
    <div className="gallery">
      <ProductTiles products={props.data} />
    </div>
  </div>
);

export default MerchantContent;
