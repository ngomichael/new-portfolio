import React, { Component } from 'react'
import styles from './ProjectImage.module.css'

class ProjectImage extends Component {
  render() {
    const { img } = this.props
    return (
      <div className={styles.container}>
        <img src={img} className={styles.screenshots} />
      </div>
    )
  }
}

export default ProjectImage
