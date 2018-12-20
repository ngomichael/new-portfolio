import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from './ProjectCard.module.css'

class ProjectCard extends Component {
  render() {
    const { projectInfo, to } = this.props
    return (
      <Link to={to}>
        <div
          className={styles.project}
          style={{ backgroundColor: projectInfo.color }}
        >
          {/* TODO: Name this style better, it isn't an overlay */}
          <div className={styles.overlay}>
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
                style={{ position: 'relative', right: '66px', top: '25px' }}
              />
              <img
                style={{
                  position: 'absolute',
                  right: '122px',
                  top: '54px',
                }}
                height="160"
                width="255"
                src={projectInfo.imgs[1]}
              />
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default ProjectCard

ProjectCard.propTypes = {
  projectInfo: PropTypes.object.isRequired,
}
