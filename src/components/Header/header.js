import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Header.module.css'
import portfolioIcon from '../../../public/icons/website-slash-icon.png'

const ListLink = props => {
  return (
    <li className={styles.listItem}>
      <Link
        to={props.to}
        className={
          props.currPath === props.to
            ? `${styles.link} ${styles.blackText}`
            : `${styles.link} ${styles.grayText}`
        }
      >
        {props.children}
        {props.to === props.currPath && <div className={styles.bottomBorder} />}
      </Link>
    </li>
  )
}

class Header extends React.Component {
  render() {
    const { pathname } = this.props
    return (
      <header className={styles.container}>
        <Link to="/">
          <span className={styles.icon}>
            <img src={portfolioIcon} alt="Michael Ngo Website Icon" />
          </span>
        </Link>
        <ul className={styles.linksContainer}>
          <ListLink to="/" currPath={pathname}>
            Projects
          </ListLink>
          <li className={styles.listItem}>
            <a
              href="https://drive.google.com/file/d/1PyJj4BOHLDTVCYRZOAfWJ72UqeNA6719/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.link} ${styles.grayText}`}
            >
              Resume
            </a>
          </li>
        </ul>
      </header>
    )
  }
}

Header.propTypes = {
  pathname: PropTypes.node.isRequired,
}

export default Header
