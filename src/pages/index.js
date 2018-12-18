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

const hangoutsInfo = {
  color: '#4b2e83',
  title: 'UW Hangouts',
  imgs: [laptop, hangouts],
}

const ufcInfo = {
  color: '#C62828',
  title: 'UFC Statistics',
  imgs: [laptop, ufc],
}

const spotifyInfo = {
  color: '#1DB954',
  title: 'Spotify Artist Search',
  imgs: [laptop, spotify],
}

const whiteboardInfo = {
  color: '#2f7de3',
  title: 'Online Whiteboard',
  imgs: [laptop, whiteboard],
}

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
      {/* <div className={styles.projectsIntroContainer}>
        <h2>Projects</h2>
        <p className={styles.description}>
          Here are some of the recent projects I've worked on!
        </p>
      </div> */}
      <div className={styles.projectsContainer}>
        <ProjectCard to="hangouts" projectInfo={hangoutsInfo} />
        <ProjectCard to="ufc" projectInfo={ufcInfo} />
        <ProjectCard to="spotify" projectInfo={spotifyInfo} />
        <ProjectCard to="whiteboard" projectInfo={whiteboardInfo} />
      </div>
    </div>
    {/* <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div> */}
    {/* <Link to="/about/">Go to about</Link> */}
  </Layout>
)

export default IndexPage
