import React, { Component } from 'react'
import githubIcon from '../../icons/github-icon.svg'
import linkedinIcon from '../../icons/linkedin-icon.svg'
import mediumIcon from '../../icons/medium-icon.png'
import styles from './Footer.module.css'

const links = [
  {
    url: 'https://github.com/ngomichael',
    siteName: 'GitHub',
    icon: githubIcon,
  },
  {
    url: 'https://www.linkedin.com/in/mhngo/',
    siteName: 'LinkedIn',
    icon: linkedinIcon,
  },
  {
    url: 'https://medium.com/@ngomichael',
    siteName: 'Medium',
    icon: mediumIcon,
  },
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
              rel="noopener noreferrer"
              key={link.siteName}
            >
              <div className={styles.iconContainer}>
                <img
                  src={link.icon}
                  alt={link.siteName}
                  width="26"
                  className={styles.icon}
                />
              </div>
            </a>
          ))}
        </div>
      </footer>
    )
  }
}

export default Footer
