import React, { Component } from 'react'
import Layout from '../layout'
import ProjectImage from '../ProjectImage/ProjectImage'
import TechnologyIcon from '../TechnologyIcon/TechnologyIcon'
import styles from './ProjectOverview.module.css'

// const feStack = stack => stack.map(tech => <li>{tech}</li>)
// const beStack = stack => stack.map(tech => <li>{tech}</li>)

class ProjectOverview extends Component {
  render() {
    const { overview, feTechnologies, beTechnologies } = this.props

    return (
      <div className={styles.container}>
        <h1 className={styles.projectName}>UW Hangouts</h1>
        <div className={styles.overviewContainer}>
          <div>
            <div className={styles.projectDetails}>
              <p className={styles.projectDetailsTitle}>Timeline: </p>
              <p>{overview.timeline}</p>
            </div>
            <div className={styles.projectDetails}>
              <p className={style.projectDetailsTitle}>Type: </p>
              <p>{overview.type}</p>
            </div>
          </div>
          <h2 className={styles.title}>Overview</h2>
          <p className={styles.description}>{overview.description}</p>
          <div className={styles.projectImagesContainer}>
            <ProjectImage />
            <ProjectImage />
          </div>
        </div>
        <h2 className={styles.title}>Tech Stack</h2>
        <div className={styles.technologyContainer}>
          <h3 className={styles.subtitle}>Front-End</h3>
          <div className={styles.technologies}>
            {feTechnologies.map(technology => (
              <TechnologyIcon technology={technology} />
            ))}
          </div>
        </div>
        <div className={styles.technologyContainer}>
          <h3 className={styles.subtitle}>Back-End</h3>
          <div className={styles.technologies}>
            {beTechnologies.map(technology => (
              <TechnologyIcon technology={technology} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectOverview
