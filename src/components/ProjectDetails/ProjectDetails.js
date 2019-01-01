import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProjectDetails.module.css'
import ProjectDetail from '../ProjectDetail/ProjectDetail'

const ProjectDetails = ({ overview }) => {
  return (
    <div className={styles.container}>
      <ProjectDetail title="Timeline" description={overview.timeline} />
      <ProjectDetail title="Type" description={overview.type} />
      <ProjectDetail title="Front-End" description={overview.feTechnologies} />
      <ProjectDetail title="Back-End" description={overview.beTechnologies} />
    </div>
  )
}

export default ProjectDetails

ProjectDetails.propTypes = {
  overview: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.array,
    timeline: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    imgs: PropTypes.array,
    feTechnologies: PropTypes.array.isRequired,
    beTechnologies: PropTypes.array.isRequired,
  }).isRequired,
}
