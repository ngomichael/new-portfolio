import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import styles from './index.module.css'
import laptop from '../images/MBP Full Icon.png'
import hangouts from '../images/UWHangouts.png'
import ufc from '../images/UFC.png'
import spotify from '../images/spotify.png'
import whiteboard from '../images/whiteboard.png'
import ProjectCard from '../components/ProjectCard/ProjectCard'

const projects = [
  {
    color: '#4b2e83',
    title: 'UW Hangouts',
    imgs: [laptop, hangouts],
    to: 'hangouts',
  },
  {
    color: '#C62828',
    title: 'UFC Statistics',
    imgs: [laptop, ufc],
    to: 'ufc',
  },
  {
    color: '#1DB954',
    title: 'Spotify Artist Search',
    imgs: [laptop, spotify],
    to: 'spotify',
  },
  {
    color: '#2f7de3',
    title: 'Online Whiteboard',
    imgs: [laptop, whiteboard],
    to: 'whiteboard',
  },
]

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
          with a focus on software development. Take a look at some of my
          projects!
        </p>
      </div>
      <div className={styles.projectsContainer}>
        {projects.map(project => (
          <ProjectCard
            key={project.title}
            to={project.to}
            projectInfo={project}
          />
        ))}
      </div>
    </div>
    {/* <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div> */}
    {/* <Link to="/about/">Go to about</Link> */}
  </Layout>
)

export default IndexPage
