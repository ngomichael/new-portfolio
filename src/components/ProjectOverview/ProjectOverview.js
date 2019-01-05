import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import ProjectImage from '../ProjectImage/ProjectImage'
import styles from './ProjectOverview.module.css'
import ProjectDetails from '../ProjectDetails/ProjectDetails'

const ProjectOverview = ({ overview }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.projectName}>{overview.title}</h1>
      <ProjectDetails overview={overview} />
      <section className={styles.sectionContainer}>
        <h1 className={styles.title}>Overview</h1>
        <p className={styles.description}>{overview.description}</p>
        <div className={styles.projectImagesContainer}>
          {overview.imgs.map(img => (
            <ProjectImage
              img={img.img}
              fallbackImg={img.fallbackImg}
              caption={img.caption}
            />
          ))}
        </div>
      </section>

      <section className={styles.sectionContainer}>
        <h2 className={styles.title}>Technologies</h2>
        <span className={styles.description}>{overview.techDescription}</span>
      </section>

      <Link to="/" className={styles.homeLink}>
        Go back to projects
      </Link>
    </div>
  )
}

export default ProjectOverview

ProjectOverview.propTypes = {
  overview: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.node),
    techDescription: PropTypes.arrayOf(PropTypes.node),
    timeline: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    imgs: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.node.isRequired,
        fallbackImg: PropTypes.node.isRequired,
        caption: PropTypes.string.isRequired,
      })
    ).isRequired,
    feTechnologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    beTechnologies: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]).isRequired,
  }).isRequired,
}
