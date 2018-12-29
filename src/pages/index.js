import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from './index.module.css'
import laptop from '../images/MBP Full Icon.png'
import hangouts from '../images/UWHangouts.jpg'
import ufc from '../images/UFC.jpg'
import spotify from '../images/spotify.jpg'
import whiteboard from '../images/whiteboard.jpg'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import HighlightedLink from '../components/HighlightedLink/HighlightedLink'

const projects = [
  {
    color: 'hsl(260, 48%, 35%)',
    overlayColor: 'hsl(260, 48%, 28%)',
    borderTopColor: 'hsl(260, 53%, 48%)',
    title: 'UW Hangouts',
    imgs: [laptop, hangouts],
    to: 'hangouts',
    type: 'Class Project',
  },
  {
    color: 'hsl(0, 66%, 47%)',
    overlayColor: 'hsl(0, 66%, 40%)',
    borderTopColor: 'hsl(0, 71%, 60%)',
    title: 'UFC Statistics',
    imgs: [laptop, ufc],
    to: 'ufc',
    type: 'Personal Project',
  },
  {
    color: 'hsl(141, 73%, 42%)',
    overlayColor: 'hsl(141, 73%, 35%)',
    borderTopColor: 'hsl(141, 78%, 55%)',
    title: 'Spotify Artist Search',
    imgs: [laptop, spotify],
    to: 'spotify',
    type: 'Personal Project',
  },
  {
    color: 'hsl(214, 76%, 54%)',
    overlayColor: 'hsl(214, 76%, 47%)',
    borderTopColor: 'hsl(214, 81%, 67%)',
    title: 'Online Whiteboard',
    imgs: [laptop, whiteboard],
    to: 'whiteboard',
    type: 'Personal Project',
  },
]

const IndexPage = props => (
  <Layout pathname={props.location.pathname}>
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
          Thanks for coming by! I'm{' '}
          <HighlightedLink
            site="https://www.linkedin.com/in/mhngo/"
            linkText="Michael Ngo"
            target="_blank"
          />
          , a senior at the University of Washington majoring in{' '}
          <HighlightedLink
            site="https://ischool.uw.edu/programs/informatics"
            linkText="Informatics"
            target="_blank"
          />
        </p>
      </div>
      <div className={styles.projectsTextContainer}>
        <h2 className={styles.subtitle}>Projects</h2>
        <p className={styles.description}>
          Take a look at some of my most recent projects
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
  </Layout>
)

export default IndexPage
