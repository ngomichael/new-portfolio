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
    color: 'hsl(260, 48%, 35%)',
    title: 'UW Hangouts',
    imgs: [laptop, hangouts],
    to: 'hangouts',
  },
  {
    color: 'hsl(0, 66%, 47%)',
    title: 'UFC Statistics',
    imgs: [laptop, ufc],
    to: 'ufc',
  },
  {
    color: 'hsl(141, 73%, 42%)',
    title: 'Spotify Artist Search',
    imgs: [laptop, spotify],
    to: 'spotify',
  },
  {
    color: 'hsl(214, 76%, 54%)',
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
          Thanks for coming by! I’m a senior at the University of Washington
          majoring in{' '}
          <a
            href="https://ischool.uw.edu/programs/informatics"
            className={styles.informaticsLink}
          >
            Informatics
          </a>
          . Take a look around!
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
