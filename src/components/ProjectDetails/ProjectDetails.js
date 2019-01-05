import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProjectDetails.module.css'
import ProjectDetail from '../ProjectDetail/ProjectDetail'

const ProjectDetails = ({ overview }) => {
  return (
    <div className={styles.container}>
      <ProjectDetail description={overview.timeline}>Timeline</ProjectDetail>
      <ProjectDetail description={overview.type}>Type</ProjectDetail>
      <ProjectDetail description={overview.feTechnologies}>
        Front-End
      </ProjectDetail>
      <ProjectDetail description={overview.beTechnologies}>
        Back-End
      </ProjectDetail>
    </div>
  )
}

export default ProjectDetails

ProjectDetails.propTypes = {
  overview: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    ),
    timeline: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    imgs: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.node.isRequired,
        caption: PropTypes.string.isRequired,
      })
    ),
    feTechnologies: PropTypes.arrayOf(PropTypes.string),
    beTechnologies: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]).isRequired,
  }).isRequired,
}
