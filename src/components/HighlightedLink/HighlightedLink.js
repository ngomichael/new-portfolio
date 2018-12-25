import React from 'react'
import PropTypes from 'prop-types'
import styles from './HighlightedLink.module.css'

const HighlightedLink = ({ site, linkText, target }) => {
  return (
    <a href={site} target={target ? target : ''} className={styles.link}>
      {linkText}
    </a>
  )
}

HighlightedLink.propTypes = {
  site: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  target: PropTypes.string,
}

export default HighlightedLink
