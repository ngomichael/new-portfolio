import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProjectDetail.module.css'

const ProjectDetail = ({ title, description }) => {
  return (
    <>
      <div className={styles.projectDetails}>
        <p className={styles.title}>{title}</p>
        {typeof description === 'string' ? (
          <p className={styles.description}>{description}</p>
        ) : (
          <ul className={styles.technologies}>
            {description.length !== 0 ? (
              description.map(technology => (
                <li key={technology} className={styles.description}>
                  {technology}
                </li>
              ))
            ) : (
              <p className={styles.description}>None</p>
            )}
          </ul>
        )}
      </div>
    </>
  )
}

export default ProjectDetail

ProjectDetail.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOf(
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ),
}
