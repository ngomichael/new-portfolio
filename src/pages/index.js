import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import styles from './index.module.css'
import Project from '../components/Project/Project'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={['michael', 'ngo', 'software', 'developer', '']}
    />
    <div className={styles.container}>
      <div className={styles.introContainer}>
        <h1 className={styles.title}>
          Full-Stack Developer, Student & NBA Fan
        </h1>
        <p className={styles.description}>
          I’m a senior at the University of Washington majoring in Informatics
          with a focus on software development.
        </p>
      </div>
      <div className={styles.projectsIntroContainer}>
        <h2>Projects</h2>
        <p className={styles.description}>
          Here are some of the recent projects I've worked on!
        </p>
      </div>
      <div className={styles.projectsContainer}>
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
    {/* <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div> */}
    {/* <Link to="/about/">Go to about</Link> */}
  </Layout>
)

export default IndexPage
