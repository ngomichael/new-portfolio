import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header/header'
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
        style={{ margin: `0 auto`, maxWidth: 1050, padding: `1.25rem 1rem` }}
      >
        <Header />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1050,
            // padding: '0px 1.0875rem 1.45rem',
            paddingTop: '20px',
          }}
        >
          {children}
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
