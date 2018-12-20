import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProjectImage from '../ProjectImage/ProjectImage'
import TechnologyIcon from '../TechnologyIcon/TechnologyIcon'
import styles from './ProjectOverview.module.css'

class ProjectOverview extends Component {
  render() {
    const { overview, feTechnologies, beTechnologies } = this.props

    return (
      <div className={styles.container}>
        <section className={styles.overviewContainer}>
          <h1 className={styles.projectName}>{overview.title}</h1>
          <div className={styles.projectDetailsContainer}>
            <div className={styles.projectDetails}>
              <p className={styles.projectDetailsTitle}>TIMELINE</p>
              <p className={styles.projectDetailsDescription}>
                {overview.timeline}
              </p>
            </div>
            <div className={styles.projectDetails}>
              <p className={styles.projectDetailsTitle}>TYPE</p>
              <p className={styles.projectDetailsDescription}>
                {overview.type}
              </p>
            </div>
          </div>
          <h2 className={styles.title}>Overview</h2>
          <p className={styles.description}>{overview.description}</p>
          <div className={styles.projectImagesContainer}>
            {overview.imgs.map(img => (
              <ProjectImage img={img} />
            ))}
          </div>
        </section>
        <h2 className={styles.title}>Tech Stack</h2>
        <section style={{ width: '100%' }}>
          <div className={styles.technologyContainer}>
            {feTechnologies.length ? (
              <h3 className={styles.subtitle}>Front-End</h3>
            ) : null}
            <div className={styles.technologies}>
              {feTechnologies.map(technology => (
                <TechnologyIcon technology={technology} />
              ))}
            </div>
          </div>
          <div className={styles.technologyContainer}>
            {beTechnologies.length ? (
              <h3 className={styles.subtitle}>Back-End</h3>
            ) : null}
            <div className={styles.technologies}>
              {beTechnologies.map(technology => (
                <TechnologyIcon technology={technology} />
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default ProjectOverview

ProjectOverview.propTypes = {
  overview: PropTypes.object.isRequired,
  feTechnologies: PropTypes.array.isRequired,
  beTechnologies: PropTypes.array.isRequired,
}
