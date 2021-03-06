import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import ProductTiles from "../templates/productTiles";
import MerchantTiles from "../templates/merchantTiles";
import Mock from "../mockData.js";
import "../style/Home.scss";
import styled from "styled-components";
import { Link } from "gatsby";

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

const ApSection = props => (
  <div style={{ marginBottom: "60px" }}>
    <div className="title">
      <span className="mainTitle">{props.title}</span>
      <a>View All</a>
    </div>
    <div className="subtitle">{props.subtitle}</div>
    <div className="gallery">
      {console.log(`data: ${JSON.stringify(props.data, null, 4)}`)}
      {props.noDynamic === true ? (
        <Container className="containers">
          {console.log(props.data)}
          {props.data.map(item => (
            <Tile key={item.id}>
              <Link to={props.data.src ? props.data.src : "#"}>
                <img src={item.src} />
                <div>
                  <div className="Home_Product__name">{item.merchantName}</div>
                </div>
              </Link>
            </Tile>
          ))}
        </Container>
      ) : props.data[0] && props.data[0].title ? (
        <ProductTiles products={props.data} />
      ) : (
        <MerchantTiles merchants={props.data} />
      )}
    </div>
  </div>
);

export default ApSection;
