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
        <div className={styles.project}>
          <div
            className={styles.image}
            style={{ backgroundColor: projectInfo.color }}
          >
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
            {/* <h2 className={styles.title}>{projectInfo.title}</h2> */}
          </div>
          {/* <div className={styles.overview}>
            <p className={styles.title}>UW Hangouts</p>
            <p className={styles.description}>
              A web application that allows two users to video chat and message
              one another
            </p>
          </div> */}
        </div>
      </Link>
    )
  }
}

export default ProjectCard

ProjectCard.propTypes = {
  projectInfo: PropTypes.object.isRequired,
}
