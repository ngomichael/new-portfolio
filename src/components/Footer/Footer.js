import React, { Component } from 'react'
import styles from './Footer.module.css'

const links = [
  { url: 'https://github.com/ngomichael', siteName: 'GitHub' },
  { url: 'https://www.linkedin.com/in/mhngo/', siteName: 'LinkedIn' },
  { url: 'https://medium.com/@ngomichael', siteName: 'Medium' },
]

class Footer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.linksContainer}>
          {links.map(link => (
            <a href={link.url} target="_blank" className={styles.link}>
              {link.siteName}
            </a>
          ))}
          {/* <a
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
          </a> */}
        </div>
      </div>
    )
  }
}

export default Footer
