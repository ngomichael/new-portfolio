import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactImageFallback from 'react-image-fallback'
import { Link } from 'gatsby'
import styles from './ProjectCard.module.css'
import laptopPNG from '../../images/MBP Full Icon.png'
import laptopWebP from '../../images/MBP Full Icon.webp'

class ProjectCard extends Component {
  render() {
    const { projectInfo } = this.props
    return (
      <div
        className={styles.project}
        style={{
          backgroundColor: projectInfo.color,
          borderTop: `3px solid ${projectInfo.borderTopColor}`,
        }}
      >
        <Link to={projectInfo.to}>
          <div
            className={styles.overlay}
            style={{ backgroundColor: projectInfo.overlayColor }}
          >
            <p className={styles.projectTitle}>{projectInfo.title}</p>
            <p className={styles.projectType}>{projectInfo.type}</p>
          </div>

          <div className={styles.images}>
            <ReactImageFallback
              src={laptopWebP}
              fallbackImage={laptopPNG}
              alt="Macbook Pro"
              height="225"
              width="300"
              className={styles.laptop}
            />

            <ReactImageFallback
              src={projectInfo.screenshot}
              fallbackImage={projectInfo.fallbackScreenshot}
              className={styles.screenshot}
              alt="Website Screenshot"
              height="160"
              width="255"
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
    fallbackScreenshot: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
}
