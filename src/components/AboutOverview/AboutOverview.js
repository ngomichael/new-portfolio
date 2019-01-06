import React from 'react'
import styles from './AboutOverview.module.css'
import PropTypes from 'prop-types'

const AboutOverview = ({ overview }) => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.title}>About Me</h1>
        <span className={styles.description}>{overview.intro}</span>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Hobbies</h2>
        <span className={styles.description}>{overview.hobbies}</span>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <span className={styles.description}>{overview.experience}</span>
      </section>
    </div>
  )
}

AboutOverview.propTypes = {
  overview: PropTypes.shape({
    intro: PropTypes.arrayOf(PropTypes.node).isRequired,
    hobbies: PropTypes.arrayOf(PropTypes.node),
    experience: PropTypes.arrayOf(PropTypes.node),
  }).isRequired,
}

export default AboutOverview
