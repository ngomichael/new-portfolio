import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProjectDetails.module.css'
import ProjectDetail from '../ProjectDetail/ProjectDetail'

const ProjectDetails = ({ overview }) => {
  return (
    <div className={styles.projectDetailsContainer}>
      <ProjectDetail title="Timeline" description={overview.timeline} />
      <ProjectDetail title="Type" description={overview.type} />
      <ProjectDetail title="Front-End" description={overview.feTechnologies} />
      <ProjectDetail title="Back-End" description={overview.beTechnologies} />
    </div>
  )
}

export default ProjectDetails

ProjectDetails.propTypes = {
  overview: PropTypes.object.isRequired,
}
