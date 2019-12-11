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

const Tiles = ({ data }) => (
  <Container>
    {data.map(item => (
      <Tile key={item.id}>
        <Link
          to="/blog"
          data-item-id={item.id}
          data-item-price={item.price}
          data-item-image={item.images[0].src}
          data-item-name={item.title}
          data-item-url={`/`}
        >
          <img src="https://cdn.shopify.com/s/files/1/2367/7591/products/image_2cf16165-a42a-41c3-87f7-154d0426baba.jpg?v=1575044712" />
          <div>
            <div className="Product__name">
              {item.title}
              <div>{item.price}</div>
            </div>
          </div>
        </Link>
      </Tile>
    ))}
  </Container>
);

export default Tiles;
