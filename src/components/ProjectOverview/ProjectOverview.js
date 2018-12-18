import React, { Component } from 'react'
import Layout from '../layout'
import ProjectImage from '../ProjectImage/ProjectImage'
import styles from './ProjectOverview.module.css'

const feStack = stack => stack.map(tech => <li>{tech}</li>)
const beStack = stack => stack.map(tech => <li>{tech}</li>)

class ProjectOverview extends Component {
  render() {
    return (
      <div className={styles.container}>
        {/* <div> */}
        <h1 className={styles.projectName}>UW Hangouts</h1>
        <div className={styles.overviewContainer}>
          <h2>Overview</h2>
          <p className={styles.description}>{this.props.overview}</p>
          <div className={styles.projectImagesContainer}>
            <ProjectImage />
            <ProjectImage />
          </div>
        </div>
        {/* <h2>Tech Stack</h2>
          <div className={styles.stackContainer}>
            <div>
              <p>Front-End</p>
              <ul>{feStack(this.props.feStack)}</ul>
            </div>
            <div>
              <p>Back-End</p>
              <ul>{beStack(this.props.beStack)}</ul>
            </div>
          </div>
          <div>
            <h2>Misc.</h2>
            <a href="" target="_blank" className={styles.link}>
              GitHub Repo
            </a>
          </div> */}
        {/* </div> */}
      </div>
    )
  }
}

export default ProjectOverview
