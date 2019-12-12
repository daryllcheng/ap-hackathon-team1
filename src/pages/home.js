import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import Tiles from "../templates/tiles";
import Mock from "../mockData.js";
import '../style/home.scss'
import styled from "styled-components";
import { Link } from "gatsby";
import ApSection from "../templates/apSection";

const fakePopular = [
  {
    id: 1,
    src:'https://site-assets.afterpay.com/media/W1siZiIsIjIwMTkvMTIvMDMvMTgvNTYvMjYvMjYxNzA1Y2UtOWM1Yi00ZDU3LWE2NDYtOTkyYmFlY2QwZmU0L0ZpbmlzaExpbmUtMTItMy5qcGciXSxbInAiLCJzdG9yZV90aWxlIiwiMjUweDI1MCJdXQ?sha=7efdb3f731b6a599',
    merchantName: 'FINISH LINE'
  },
  {
    id: 2,
    src:'https://site-assets.afterpay.com/media/W1siZiIsIjIwMTkvMTEvMjgvMDUvNDkvMDAvZTYzNGY4MzQtNGE5Zi00MjgxLTlkMzUtYmU2NzdiZGEyYjM3L0NvdHRvbiBPbiBXZWVrIDIyIC0gQWxsIGNhdGVnb3JpZXMgZXhjbHVkaW5nIE1lbnMuanBnIl0sWyJwIiwic3RvcmVfdGlsZSIsIjI1MHgyNTAiXV0?sha=320a3e34bee01e6d',
    merchantName: 'COTTON ON'
  },
  {
    id: 3,
    src:'https://site-assets.afterpay.com/media/W1siZiIsIjIwMTgvMTEvMjkvMTcvNDcvMTMvMTE1OWRiOWEtM2QwNS00YTgxLWJkODMtY2QyNTQyYmFmZDliL0NvUG9wX0FmdGVyUGF5XzUwMHg1MDBwaXhfVEZfUjFWMi5qcGciXSxbInAiLCJzdG9yZV90aWxlIiwiMjUweDI1MCJdXQ?sha=a54e50d75f35cb9e',
    merchantName: 'COLOURPOP'
  },
  {
    id: 4,
    src:'https://site-assets.afterpay.com/media/W1siZiIsIjIwMTkvMTAvMjkvMjMvMjMvMzYvN2RiMTQ0MzUtZjUxMS00MDI2LWI5MzQtMTU1YTZhNTUzYjhhL0ZvcmV2ZXIyMS5qcGciXSxbInAiLCJzdG9yZV90aWxlIiwiMjUweDI1MCJdXQ?sha=7b840fcf1fa4ecfd',
    merchantName: 'FOREVER 21'
  },
]

const Home = (data) => (
  <div>
    <img className="adImg" src="https://site-assets.afterpay.com/pictures/W1siZiIsIjIwMTkvMTEvMjEvMjMvMzEvNDcvZDc2OWExNzMtMWViOC00NzJkLWE3YTQtNGI2YjE1MjRjMWM5LzExXzEzXzIwMTlfSE9NRVBBR0VfMjIwMHg4MDAgKDIpLmpwZyJdLFsicCIsInRodW1iIiwiMTEyMHg-Il0sWyJwIiwiZW5jb2RlIiwianBlZyIsIi1xdWFsaXR5IDg1Il1d/11%2013%202019%20HOMEPAGE%202200x800%20%282%29.jpeg?sha=bdb1ed78ab893fa3"/>
    {/* <Tiles data={Mock.products} /> */}
    <ApSection 
      title="Most Popular" 
      noDynamic={true}
      subtitle="Top picks make the best gifts. Shop our most popular retailers." 
      data={fakePopular}
    />
    <ApSection 
      title="New Arrivals"
      noDynamic={true} 
      subtitle="See which partners just arrived—just in time for the holidays." 
      data={fakePopular}
    />
    <ApSection 
      title="Hot Items"
      noDynamic={true} 
      subtitle="Now Trending on Afterpay. Shop our most popular retailers." 
      data={fakePopular}
    />
    <ApSection 
      title="Most Popular"
      noDynamic={true} 
      subtitle="Top picks make the best gifts. Shop our most popular retailers." 
      data={fakePopular}
    />
  </div>
)

export default Home;