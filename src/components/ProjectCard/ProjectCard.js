import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from './ProjectCard.module.css'

class ProjectCard extends Component {
  render() {
    const { projectInfo, to } = this.props
    return (
      <div
        className={styles.project}
        style={{
          backgroundColor: projectInfo.color,
          borderTop: `3px solid ${projectInfo.borderTopColor}`,
        }}
      >
        <Link to={to}>
          <div
            className={styles.overlay}
            style={{ backgroundColor: projectInfo.overlayColor }}
          >
            <p className={styles.projectTitle}>{projectInfo.title}</p>
            <p className={styles.projectType}>{projectInfo.type}</p>
          </div>
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
            }}
            className={styles.images}
          >
            <img
              src={projectInfo.imgs[0]}
              alt="Macbook Pro"
              height="225"
              width="300"
              className={styles.laptop}
            />
            <img
              className={styles.screenshot}
              alt="Website Screenshot"
              height="160"
              width="255"
              src={projectInfo.imgs[1]}
            />
          </div>
        </Link>
      </div>
    )
  }
}

export default ProjectCard

ProjectCard.propTypes = {
  projectInfo: PropTypes.object.isRequired,
}
