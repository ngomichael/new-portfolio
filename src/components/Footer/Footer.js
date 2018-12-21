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
      <footer className={styles.container}>
        <div className={styles.linksContainer}>
          {links.map(link => (
            <a
              href={link.url}
              target="_blank"
              key={link.siteName}
              className={styles.link}
            >
              {link.siteName}
            </a>
          ))}
        </div>
      </footer>
    )
  }
}

export default Footer
