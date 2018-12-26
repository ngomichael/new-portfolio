import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import './layout.css'

const Layout = ({ children, pathname }) => (
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
          maxWidth: 1000,
          height: `100%`,
        }}
      >
        <Header pathname={pathname} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1000,
            paddingTop: '50px',
          }}
        >
          {children}
        </div>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
