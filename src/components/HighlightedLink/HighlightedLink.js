import React from 'react'
import PropTypes from 'prop-types'
import styles from './HighlightedLink.module.css'

const HighlightedLink = ({ site, target, children }) => {
  return (
    <a
      href={site}
      target={target}
      rel="noopener noreferrer"
      className={styles.link}
    >
      {children}
    </a>
  )
}

HighlightedLink.propTypes = {
  site: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
}

export default HighlightedLink
