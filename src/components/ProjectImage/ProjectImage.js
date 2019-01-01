import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactImageFallback from 'react-image-fallback'
import styles from './ProjectImage.module.css'

class ProjectImage extends Component {
  render() {
    const { img, fallbackImg, caption } = this.props
    return (
      <div className={styles.container}>
        <ReactImageFallback
          src={img}
          fallbackImage={fallbackImg}
          alt="Project Screenshot"
          className={styles.screenshot}
        />
        <figcaption className={styles.caption}>{caption}</figcaption>
      </div>
    )
  }
}

export default ProjectImage

ProjectImage.propType = {
  img: PropTypes.node.isRequired,
  fallbackImg: PropTypes.node.isRequired,
  caption: PropTypes.string.isRequired,
}
