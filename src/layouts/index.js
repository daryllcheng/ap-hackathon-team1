import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
// import '../fonts/gotham-cufonfonts/GothamMedium.otf'
import '../style/index.scss'

const navbarMini = [
'All Categories',
'All Stores',
'Most Popular',
'New',
'Women',
'Men',
'Kids',
'Beauty',
]

const Layout = ({ children, site }) => (
  <div>
    <Helmet title="Snipcart + DatoCMS + GatsbyJS Example" />
    <div className="Container">
      <div className="Header">
        <div className="headerContent">
          <img className="logo" src="https://site-assets.afterpay.com/assets/afterpay_logo-c6f18616342f97c47c82457cf06eb00e0249830809ff092c32727f5dff8a1eba.svg" />
          <div className="searchBar">
            <div className="mainSearch">
              <span>
                <img/>
              </span>
              <input className="searchInput" type="search" placeholder="Search stores and categories"/>
            </div>
            <button className="searchButton">Search</button>
          </div>
          <div className="headerRightSide">
            <a className="anchorHeaderLink" href="#">How It Works</a>
            <a className="anchorHeaderLink" href="#">For Retailers</a>
            <a className="signUp buttonReset grey">Sign Up</a>
            <a className="logIn buttonReset yellow">Log In</a>
          </div>
        </div>
      </div>
      <div className="headerMini">
        {navbarMini.map(content => <a className="anchorMiniLink" href="#">{content}</a> )}
      </div>
      
      {/* This is where contents are loaded for various pages */}
      {children}

      <div className="Wrap" >
        <div className="Footer">
          This website is just an example project to demonstrate how you can 
          integrate <a href="https://www.gatsbyjs.org/">Gatsby</a>, <a href="https://snipcart.com/">Snipcart</a> and <a href="https://www.datocms.com">DatoCMS</a>.
        </div>
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

