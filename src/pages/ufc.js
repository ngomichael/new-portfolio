import React from 'react'
import Layout from '../components/layout'
import ProjectOverview from '../components/ProjectOverview/ProjectOverview'
import ufcHomeJPG from '../images/overview/ufcHome.jpg'
import ufcHomeWebP from '../images/overview/ufcHome.webp'
import ufcStatsJPG from '../images/overview/ufcStats.jpg'
import ufcStatsWebP from '../images/overview/ufcStats.webp'

import SEO from '../components/seo'

const overview = {
  title: 'UFC Statistic Displayer',
  description: [
    `My project does exactly what the names suggests, it displays UFC statistics.
  More specifically, it displays UFC fighter statistics. The home page shows you the top 10
  pound for pound fighters and as a user, you pick a fighter you want to know more about. Once you 
  pick a fighter the application takes you to another page where you are able to see 6 different statistics for
  that fighter, where they're from, and their record.`,
    <br />,
    <br />,
    `In my rankings of my favorite projects, this is definitely up there. I just learned so much at
  the end of the project and had so much fun immersing myself in different technologies.
  The most notable 3 were: React, Redux, and React-Router. This project is what really started my 
  love for React and it has only grown ever since.`,
  ],
  timeline: "Sep '17 - Feb '18",
  type: 'Personal Project',
  imgs: [
    {
      img: ufcHomeWebP,
      fallbackImg: ufcHomeJPG,
      caption: 'Home page where a user chooses a fighter',
    },
    {
      img: ufcStatsWebP,
      fallbackImg: ufcStatsJPG,
      caption:
        'Statistics page where the fighters statistics and information are displayed',
    },
  ],
  feTechnologies: ['React', 'Redux', 'React-Router'],
  beTechnologies: [],
}

const UFC = () => (
  <Layout>
    <SEO title="UFC" />
    <ProjectOverview overview={overview} />
  </Layout>
)

export default UFC
