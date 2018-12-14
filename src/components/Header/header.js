import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './header.module.css'
import resume from '../../images/resume.pdf'

const ListLink = props => {
  return (
    <li
      className={
        window.location.href.slice(21) === props.wantedPath
          ? `${styles.tab} ${styles.bottomBorder}`
          : styles.tab
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
          <a href={resume} target="_blank" className={styles.tab}>
            Resume
          </a>
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
