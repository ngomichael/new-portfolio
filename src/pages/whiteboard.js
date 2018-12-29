import React from 'react'
import js from '../icons/js-icon.svg'
import css from '../icons/css-icon.svg'
import html from '../icons/html-icon.svg'
import Layout from '../components/layout'
import whiteboardHome from '../images/overview/whiteboardHome.jpg'
import ProjectOverview from '../components/ProjectOverview/ProjectOverview'
import SEO from '../components/seo'

const overview = {
  title: 'Online Whiteboard',

  description: [
    `This project for me was the start of making more than just static websites.
  This web application allows you to draw on the whiteboard, erase, and clear the whiteboard. The
  options you have when drawing is the color and the thickness of the stroke.`,
    <br />,
    <br />,
    `My Online Whiteboard project is my very first project where I
  used more than 25 lines of JavaScript! I used this project as my first
  taste of JavaScript and this came with a ton of headaches and 
  challenges, but it's like that sometimes. This jumpstarted my appreaction for JavaScript
  and I haven't stopped working with it since.`,
  ],
  timeline: "Dec '16 - March '17",
  type: 'Personal Project',
  imgs: [
    {
      img: whiteboardHome,
      caption:
        'Home page where a user can draw what they want on the whiteboard',
    },
  ],
  feTechnologies: [
    { icon: js, name: 'JavaScript' },
    { icon: css, name: 'CSS' },
    { icon: html, name: 'HTML' },
  ],
  beTechnologies: [],
}

const Whiteboard = () => (
  <Layout>
    <SEO title="Whiteboard" />
    <ProjectOverview overview={overview} />
  </Layout>
)

export default Whiteboard
