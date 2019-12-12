/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

const path = require("path");
const request = require("request-promise");
const axios = require("axios");
const crypto = require("crypto");
const slash = require(`slash`);

exports.sourceNodes = async ({ boundActionCreators, actions }) => {
  const { createNode } = boundActionCreators;
  const { createPage } = actions;

  const res = await axios("https://apt-team-1.herokuapp.com/merchants/");
  const data = res.data;

  const merchantTemplate = path.resolve("src/templates/merchant.js");

  data.forEach(merchant => {
    const { _id, products, merchantName } = merchant;
    console.log("Merhcant Page--: ", `/merchant/${_id}/`);
    createPage({
      path: `/merchant/${_id}/`,
      component: slash(merchantTemplate),
      context: {
        uid: _id,
        merchantName,
        products
      }
    });
  });

  data.map(merchant => {
    const { merchantName, _id, products } = merchant;
    const {
      product_id,
      id,
      images,
      price,
      product_type,
      tags,
      title,
      vendor
    } = products;

    const merchantNode = {
      id: _id,
      merchantName,
      internal: {
        type: `merchant`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(merchant))
          .digest(`hex`)
      },
      products
    };

    createNode(merchantNode);
  });

  return;
};
