import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import ProjectImage from '../ProjectImage/ProjectImage'
import styles from './ProjectOverview.module.css'
import ProjectDetails from '../ProjectDetails/ProjectDetails'

class ProjectOverview extends Component {
  render() {
    const { overview } = this.props
    return (
      <div className={styles.container}>
        <section className={styles.overviewContainer}>
          <h1 className={styles.projectName}>{overview.title}</h1>
          <ProjectDetails overview={overview} />
          <h2 className={styles.title}>Overview</h2>
          <p className={styles.description}>{overview.description}</p>
          <div className={styles.projectImagesContainer}>
            {overview.imgs.map(img => (
              <ProjectImage img={img.img} caption={img.caption} />
            ))}
          </div>
        </section>
        <Link to="/" className={styles.homeLink}>
          Go back to projects
        </Link>
      </div>
    )
  }
}

export default ProjectOverview

ProjectOverview.propTypes = {
  overview: PropTypes.object.isRequired,
}
