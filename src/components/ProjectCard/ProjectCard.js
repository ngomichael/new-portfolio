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
        style={{ backgroundColor: projectInfo.color }}
      >
        <Link to={to}>
          <div
            className={styles.overlay}
            style={{ backgroundColor: projectInfo.color }}
          />
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <img
              src={projectInfo.imgs[0]}
              alt="Macbook Pro"
              height="225"
              width="300"
              style={{
                position: 'relative',
                right: '66px',
                top: '25px',
                zIndex: 1,
              }}
            />
            <img
              style={{
                position: 'absolute',
                right: '198px',
                top: '56px',
                zIndex: 1,
              }}
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
