import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './header.module.css'
import icon from '../../../public/icons/WebsiteIconSlash.png'

// TODO: Is there a better way to check url and add a bottom border?
const ListLink = props => {
  return (
    <li>
      <Link
        to={props.to}
        className={
          window.location.href.slice(21) === props.wantedPath
            ? `${styles.link} ${styles.bottomBorder}`
            : `${styles.grayText} ${styles.link}`
        }
        className={styles.link}
      >
        {props.children}
      </Link>
    </li>
  )
}

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className={styles.container}>
        <Link to="/">
          <span className={styles.icon}>
            <img src={icon} />
          </span>
        </Link>
        <ul className={styles.linksContainer}>
          <ListLink to="/" wantedPath="/">
            Projects
          </ListLink>
          <a
            href="https://drive.google.com/file/d/1PyJj4BOHLDTVCYRZOAfWJ72UqeNA6719/view?usp=sharing"
            target="_blank"
            className={`${styles.tab} ${styles.link}`}
          >
            Resume
          </a>
        </ul>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
