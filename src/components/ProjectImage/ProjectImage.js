import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './ProjectImage.module.css'
import { checkPropTypes } from 'prop-types'

class ProjectImage extends Component {
  render() {
    const { img, caption } = this.props
    return (
      <div className={styles.container}>
        <img src={img} className={styles.screenshot} />
        <figcaption className={styles.caption}>{caption}</figcaption>
      </div>
    )
  }
}

export default ProjectImage

ProjectImage.propType = {
  img: PropTypes.object.isRequired,
  caption: PropTypes.string,
}
