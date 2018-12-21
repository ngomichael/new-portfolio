import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './header.module.css'
import icon from '../../../public/icons/WebsiteIconSlash.png'

const ListLink = props => {
  return (
    <Link
      to={props.to}
      className={
        props.currPath === props.to
          ? `${styles.link} ${styles.bottomBorder}`
          : `${styles.link}`
      }
    >
      {props.children}
    </Link>
  )
}

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.pathname === '/')
    return (
      <header className={styles.container}>
        <Link to="/">
          <span className={styles.icon}>
            <img src={icon} />
          </span>
        </Link>
        <div className={styles.linksContainer}>
          <ListLink to="/" currPath={this.props.pathname}>
            Projects
          </ListLink>
          <a
            href="https://drive.google.com/file/d/1PyJj4BOHLDTVCYRZOAfWJ72UqeNA6719/view?usp=sharing"
            target="_blank"
            className={`${styles.tab} ${styles.link}`}
          >
            Resume
          </a>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
