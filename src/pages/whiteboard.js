import React from 'react'
import { Link } from 'gatsby'
import react from '../icons/react-icon.svg'
import Layout from '../components/layout'
import whiteboardHome from '../images/overview/whiteboardHome.png'
import ProjectOverview from '../components/ProjectOverview/ProjectOverview'
import SEO from '../components/seo'

const overview = {
  title: 'Online Whiteboard',
  description: ``,
  timeline: 'December 2016 - March 2017',
  type: 'Personal Project',
  imgs: [whiteboardHome],
}

const feTechnologies = [{ icon: react, width: '60', margin: '18' }]
const beTechnologies = []

const Whiteboard = () => (
  <Layout>
    <SEO title="Whiteboard" />
    <ProjectOverview
      overview={overview}
      feTechnologies={feTechnologies}
      beTechnologies={beTechnologies}
    />
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default Whiteboard
