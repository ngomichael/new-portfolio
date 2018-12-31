import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from './ProjectCard.module.css'
import laptop from '../../images/MBP Full Icon.png'

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
          <div className={styles.images}>
            <img
              src={laptop}
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
              src={projectInfo.screenshot}
            />
          </div>
        </Link>
      </div>
    )
  }
}

export default ProjectCard

ProjectCard.propTypes = {
  projectInfo: PropTypes.shape({
    color: PropTypes.string.isRequired,
    overlayColor: PropTypes.string.isRequired,
    borderTopColor: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    screenshot: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
}
