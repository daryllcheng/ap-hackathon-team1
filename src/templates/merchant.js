import React from "react";
import Layout from "../layouts/index";
import ProductTiles from "../templates/productTiles";

const Merhcant = ({ pageContext }) => (
  <Layout>
    <img
      className="adImg"
      src="https://site-assets.afterpay.com/pictures/W1siZiIsIjIwMTkvMTEvMjEvMjMvMzEvNDcvZDc2OWExNzMtMWViOC00NzJkLWE3YTQtNGI2YjE1MjRjMWM5LzExXzEzXzIwMTlfSE9NRVBBR0VfMjIwMHg4MDAgKDIpLmpwZyJdLFsicCIsInRodW1iIiwiMTEyMHg-Il0sWyJwIiwiZW5jb2RlIiwianBlZyIsIi1xdWFsaXR5IDg1Il1d/11%2013%202019%20HOMEPAGE%202200x800%20%282%29.jpeg?sha=bdb1ed78ab893fa3"
    />
    <ProductTiles products={pageContext.products} />
  </Layout>
);

export default Merhcant;
