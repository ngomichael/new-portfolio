import React from 'react'
import { Link } from 'gatsby'
import aws from '../icons/aws-icon.svg'
import docker from '../icons/docker-icon.svg'
import golang from '../icons/golang-icon.svg'
import mongodb from '../icons/mongodb-icon.svg'
import mysql from '../icons/mysql-icon.svg'
import mui from '../icons/mui-icon.svg'
import node from '../icons/nodejs-icon.svg'
import react from '../icons/react-icon.svg'
import hangoutsHome from '../images/overview/hangoutsHome.png'
import hangoutsVideo from '../images/overview/hangoutsVideo.png'
import Layout from '../components/layout'
import ProjectOverview from '../components/ProjectOverview/ProjectOverview'
import SEO from '../components/seo'

const overview = {
  title: 'UW Hangouts',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  timeline: "Nov '18 - Dec '18",
  type: 'Server-Side Web Dev Final Project',
  imgs: [
    {
      img: hangoutsHome,
      caption: 'Home page where a user can search for a friend',
    },
    {
      img: hangoutsVideo,
      caption: 'Video chat page where two users video chat with one another',
    },
  ],
}
const feTechnologies = [
  { icon: react, width: '100', margin: '18', name: 'React' },
  { icon: mui, width: '35', margin: '25', name: 'Material UI' },
]

const beTechnologies = [
  { icon: golang, width: '35', margin: '22', name: 'Go' },
  { icon: node, width: '35', margin: '18', name: 'Node' },
  { icon: mysql, width: '40', margin: '26', name: 'MySQL' },
  { icon: mongodb, width: '35', margin: '24', name: 'MongoDB' },
  { icon: docker, width: '35', margin: '22', name: 'Docker' },
  { icon: aws, width: '35', margin: '25', name: 'AWS' },
]

const Hangouts = () => (
  <Layout>
    <SEO title="Hangouts" />
    <ProjectOverview
      overview={overview}
      feTechnologies={feTechnologies}
      beTechnologies={beTechnologies}
    />
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default Hangouts
