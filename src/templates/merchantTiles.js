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

const Tiles = ({ merchants }) => (
  <Container>
    {merchants.edges.map(({ node: merchant }) => (
      <Tile key={merchant.id}>
        <Link to={`/merchant/${merchant.id}`}>
          <img
            src={
              merchant.products[0].images
                ? merchant.products[0].images[0].src
                : ""
            }
          />
          <div>
            <div className="Product__name">{merchant.merchantName}</div>
          </div>
        </Link>
      </Tile>
    ))}
  </Container>
);

export default Tiles;
