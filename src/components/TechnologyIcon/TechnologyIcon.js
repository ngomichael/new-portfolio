import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './TechnologyIcon.module.css'

class TechnologyIcon extends Component {
  render() {
    const { icon } = this.props.technology
    return (
      <div className={styles.container}>
        <img alt="icon" src={icon} className={styles.icon} />
      </div>
    )
  }
}

export default TechnologyIcon

TechnologyIcon.propTypes = {
  technology: PropTypes.object.isRequired,
}
