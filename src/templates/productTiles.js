import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 16vh 0;
  justify-content: space-between;
`;

const Tile = styled.div`
  width: 220px;
  height: 220px;
  margin: 50px 5px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ProductTiles = ({ products }) => (
  <Container>
    {products.map(product => (
      <Tile key={product.id}>
        <Link to={`/${product.id}`}>
          <img src={product.images ? product.images[0].src : ""} />
          <div>
            <div className="Product__name">{product.title}</div>
          </div>
        </Link>
      </Tile>
    ))}
  </Container>
);

export default ProductTiles;
