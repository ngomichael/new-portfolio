import React from 'react'
import PropTypes from 'prop-types'
import styles from './CodeSnippet.module.css'

const CodeSnippet = ({ children }) => {
  return <span className={styles.background}>{children}</span>
}

CodeSnippet.propTypes = {
  children: PropTypes.string.isRequired,
}

export default CodeSnippet
