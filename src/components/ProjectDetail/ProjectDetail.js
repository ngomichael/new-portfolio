import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProjectDetail.module.css'

const ProjectDetail = ({ title, description }) => {
  return (
    <>
      <div className={styles.projectDetails}>
        <p className={styles.projectDetailsTitle}>{title}</p>
        {typeof description === 'string' ? (
          <p className={styles.projectDetailsDescription}>{description}</p>
        ) : (
          <div className={styles.technologies}>
            {description.length !== 0 ? (
              description.map(technology => (
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
        )}
      </div>
    </>
  )
}

export default ProjectDetail

ProjectDetail.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.any.isRequired,
}
