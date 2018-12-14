import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './header.module.css'

const ListLink = props => {
  return (
    <li
      className={
        window.location.href.slice(21) === props.wantedPath
          ? `${styles.list} ${styles.bottomBorder}`
          : styles.list
      }
    >
      <Link to={props.to}>{props.children}</Link>
    </li>
  )
}

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    // console.log(this.state.path)
    return (
      <div className={styles.container}>
        <Link to="/">
          <span className={styles.icon} />
        </Link>
        <ul className={styles.linksContainer}>
          <ListLink to="/" wantedPath="/">
            Projects
          </ListLink>
          <ListLink to="/resume" wantedPath="/resume">
            Resume
          </ListLink>
        </ul>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
