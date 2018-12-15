import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 950,
          padding: `1.25rem 1rem`,
        }}
      >
        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
          }}
        >
          <Header />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 950,
              // padding: '0px 1.0875rem 1.45rem',
              paddingTop: '50px',
              // display: `flex`,
              // flexDirection: `column`,
              // alignItems: `center`,
            }}
          >
            {children}
          </div>
          <Footer />
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
