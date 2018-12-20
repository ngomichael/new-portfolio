import React from 'react'
import { Link } from 'gatsby'
import js from '../icons/js-icon.svg'
import css from '../icons/css-icon.svg'
import html from '../icons/html-icon.svg'
import Layout from '../components/layout'
import whiteboardHome from '../images/overview/whiteboardHome.png'
import ProjectOverview from '../components/ProjectOverview/ProjectOverview'
import SEO from '../components/seo'

const overview = {
  title: 'Online Whiteboard',
  description: ``,
  timeline: "Dec '16 - March '17",
  type: 'Personal Project',
  imgs: [whiteboardHome],
}

const feTechnologies = [{ icon: js }, { icon: css }, { icon: html }]
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
