import React, { Component } from 'react'
import styles from './Footer.module.css'

class Footer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <a
          href="https://github.com/ngomichael"
          target="_blank"
          className={styles.link}
        >
          GitHub
        </a>
        <div className={styles.line} />
        <a
          href="https://www.linkedin.com/in/mhngo/"
          target="_blank"
          className={styles.link}
        >
          LinkedIn
        </a>
        <div className={styles.line} />
        <a
          href="https://medium.com/@ngomichael"
          target="_blank"
          className={styles.link}
        >
          Medium
        </a>
      </div>
    )
  }
}

export default Footer
