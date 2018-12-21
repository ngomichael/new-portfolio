import React from 'react'
import { Link } from 'gatsby'
import react from '../icons/react-icon.svg'
import redux from '../icons/redux-icon.svg'
import reactRouter from '../icons/react-router-icon.svg'
import Layout from '../components/layout'
import ProjectOverview from '../components/ProjectOverview/ProjectOverview'
import ufcHome from '../images/overview/ufcHome.png'
import ufcStats from '../images/overview/ufcStats.png'

import SEO from '../components/seo'

const overview = {
  title: 'UFC Statistic Displayer',
  description: `UFC Statistic Displayer is exactly what it is, it displays UFC fighter statistics. 
    At this time I just got into the UFC and it was something I really enjoyed watching. So I decided to
    create a project that interested me while learning new technologies like React, React-Router, and Redux. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.`,
  timeline: "Sep '17 - Feb '18",
  type: 'Personal Project',
  imgs: [ufcHome, ufcStats],
}

const feTechnologies = [
  { icon: react, width: '60', margin: '18' },
  { icon: redux },
  { icon: reactRouter },
]
const beTechnologies = []

const UFC = () => (
  <Layout>
    <SEO title="UFC" />
    <ProjectOverview
      overview={overview}
      feTechnologies={feTechnologies}
      beTechnologies={beTechnologies}
    />
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default UFC
