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

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  const res = await axios("https://apt-team-1.herokuapp.com/merchants/");
  const data = res.data;

  data.map(merchant => {
    const { merchantName, _id, products } = merchant;

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
