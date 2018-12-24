import React from 'react'
import PropTypes from 'prop-types'
import styles from './HighlightedLink.module.css'

const HighlightedLink = ({ site, linkText }) => {
  return (
    <a href={site} target="_blank" className={styles.link}>
      {linkText}
    </a>
  )
}

HighlightedLink.propTypes = {
  site: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
}

export default HighlightedLink
