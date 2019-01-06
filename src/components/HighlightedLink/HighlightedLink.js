import React from 'react'
import PropTypes from 'prop-types'
import styles from './HighlightedLink.module.css'

const HighlightedLink = ({ site, target = '', rel = '', children }) => {
  return (
    <a href={site} target={target} rel={rel} className={styles.link}>
      {children}
    </a>
  )
}

HighlightedLink.propTypes = {
  site: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
}

export default HighlightedLink
