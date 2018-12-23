import React from 'react'
import { Link } from 'gatsby'
import js from '../icons/js-icon.svg'
import css from '../icons/css-icon.svg'
import html from '../icons/html-icon.svg'
import Layout from '../components/layout'
import whiteboardHome from '../images/overview/whiteboardHome.png'
import ProjectOverview from '../components/ProjectOverview/ProjectOverview'
import SEO from '../components/seo'

// What and Why
const overview = {
  title: 'Online Whiteboard',
  description: `My Online Whiteboard project is my very first project where I
  used more than 25 lines of JavaScript! I used this project as my first
  taste of JavaScript and this came with a ton of headaches and 
  challenges, but it be like that sometimes. This web application allows
  you to draw on the whiteboard, erase, and clear the whiteboard. Options
  you have when drawing is the color and the thickness of the stroke.
  
  
  `,
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
