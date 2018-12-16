import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from './ProjectCard.module.css'
// import laptop from '../../images/MBP Full Icon.png'
// import hangouts from '../../images/UWHangouts.png'

class ProjectCard extends Component {
  render() {
    const { projectInfo } = this.props
    return (
      <Link to={this.props.to}>
        <div
          className={styles.project}
          style={{ backgroundColor: projectInfo.color }}
        >
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
                width="390"
                style={{ position: 'relative', right: '66px', top: '25px' }}
              />
              <img
                style={{
                  position: 'absolute',
                  right: '138px',
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
