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
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  timeline: "Dec '16 - March '17",
  type: 'Personal Project',
  imgs: [
    {
      img: whiteboardHome,
      caption:
        'Home page where a user can draw whatever they want on the whiteboard',
    },
  ],
}

const feTechnologies = [
  { icon: js, name: 'JavaScript' },
  { icon: css, name: 'CSS' },
  { icon: html, name: 'HTML' },
]
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
