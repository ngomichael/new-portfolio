import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProjectImage from '../ProjectImage/ProjectImage'
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
            <div className={styles.projectDetails}>
              <p className={styles.projectDetailsTitle}>FRONT-END</p>
              <div className={styles.technologies}>
                {feTechnologies.length !== 0 ? (
                  feTechnologies.map(technology => (
                    <li
                      key={technology.name}
                      className={styles.projectDetailsDescription}
                    >
                      {technology.name}
                    </li>
                  ))
                ) : (
                  <p className={styles.projectDetailsDescription}>None</p>
                )}
              </div>
            </div>
            <div className={styles.projectDetails}>
              <p className={styles.projectDetailsTitle}>BACK-END</p>
              <div className={styles.technologies}>
                {beTechnologies.length !== 0 ? (
                  beTechnologies.map(technology => (
                    <li
                      key={technology.name}
                      lassName={styles.projectDetailsDescription}
                    >
                      {technology.name}
                    </li>
                  ))
                ) : (
                  <p className={styles.projectDetailsDescription}>None</p>
                )}
              </div>
            </div>
          </div>
          <h2 className={styles.title}>Overview</h2>
          <p className={styles.description}>{overview.description}</p>
          <div className={styles.projectImagesContainer}>
            {overview.imgs.map(img => (
              <ProjectImage img={img.img} caption={img.caption} />
            ))}
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
