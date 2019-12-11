import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import Tiles from "../templates/tiles";
import Mock from "../mockData.js";
import Home from "./Home.js";
import '../style/home.scss'

export default () => (
  <StaticQuery
    query={graphql`
      query merchants {
        allRestApiMerchants {
          edges {
            node {
              merchantName
              _id
              products {
                id
                images {
                  src
                }
                product_type
                tags
                title
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout site={data.site}>
        {/* <img className="adImg" src="https://site-assets.afterpay.com/pictures/W1siZiIsIjIwMTkvMTEvMjEvMjMvMzEvNDcvZDc2OWExNzMtMWViOC00NzJkLWE3YTQtNGI2YjE1MjRjMWM5LzExXzEzXzIwMTlfSE9NRVBBR0VfMjIwMHg4MDAgKDIpLmpwZyJdLFsicCIsInRodW1iIiwiMTEyMHg-Il0sWyJwIiwiZW5jb2RlIiwianBlZyIsIi1xdWFsaXR5IDg1Il1d/11%2013%202019%20HOMEPAGE%202200x800%20%282%29.jpeg?sha=bdb1ed78ab893fa3"/> */}
        <Home data={Mock.products} />
      </Layout>
    )}
  />
);
