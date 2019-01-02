import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from './index.module.css'
import hangoutsJPG from '../images/UWHangouts.jpg'
import hangoutsWebP from '../images/UWHangouts.webp'
import ufcJPG from '../images/UFC.jpg'
import ufcWebP from '../images/UFC.webp'
import spotifyJPG from '../images/spotify.jpg'
import spotifyWebP from '../images/spotify.webp'
import whiteboardJPG from '../images/whiteboard.jpg'
import whiteboardWebP from '../images/whiteboard.webp'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import HighlightedLink from '../components/HighlightedLink/HighlightedLink'

const projects = [
  {
    index: 1,
    color: 'hsl(260, 48%, 35%)',
    overlayColor: 'hsl(260, 48%, 28%)',
    borderTopColor: 'hsl(260, 53%, 48%)',
    animationDelay: '700ms',
    title: 'UW Hangouts',
    screenshot: hangoutsJPG,
    fallbackScreenshot: hangoutsWebP,
    to: 'hangouts',
    type: 'Class Project',
  },
  {
    index: 2,
    color: 'hsl(0, 66%, 47%)',
    overlayColor: 'hsl(0, 66%, 40%)',
    borderTopColor: 'hsl(0, 71%, 60%)',
    animationDelay: '750ms',
    title: 'UFC Statistics',
    screenshot: ufcJPG,
    fallbackScreenshot: ufcWebP,
    to: 'ufc',
    type: 'Personal Project',
  },
  {
    index: 3,
    color: 'hsl(141, 73%, 42%)',
    overlayColor: 'hsl(141, 73%, 35%)',
    borderTopColor: 'hsl(141, 78%, 55%)',
    animationDelay: '800ms',
    title: 'Spotify Artist Search',
    screenshot: spotifyJPG,
    fallbackScreenshot: spotifyWebP,
    to: 'spotify',
    type: 'Personal Project',
  },
  {
    index: 4,
    color: 'hsl(214, 76%, 54%)',
    overlayColor: 'hsl(214, 76%, 47%)',
    borderTopColor: 'hsl(214, 81%, 67%)',
    animationDelay: '850ms',
    title: 'Online Whiteboard',
    screenshot: whiteboardJPG,
    fallbackScreenshot: whiteboardWebP,
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
            rel="noopener noreferrer"
          />
          , a senior at the University of Washington majoring in{' '}
          <HighlightedLink
            site="https://ischool.uw.edu/programs/informatics"
            linkText="Informatics"
            target="_blank"
            rel="noopener noreferrer"
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
          <ProjectCard key={project.title} projectInfo={project} />
        ))}
      </div>
    </div>
  </Layout>
)

export default IndexPage
