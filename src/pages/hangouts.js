import React from 'react'
import aws from '../icons/aws-icon.svg'
import docker from '../icons/docker-icon.svg'
import golang from '../icons/golang-icon.svg'
import mongodb from '../icons/mongodb-icon.svg'
import mysql from '../icons/mysql-icon.svg'
import mui from '../icons/mui-icon.svg'
import node from '../icons/nodejs-icon.svg'
import react from '../icons/react-icon.svg'
import hangoutsHome from '../images/overview/hangoutsHome.jpg'
import hangoutsVideo from '../images/overview/hangoutsVideo.jpg'
import Layout from '../components/layout'
import ProjectOverview from '../components/ProjectOverview/ProjectOverview'
import SEO from '../components/seo'

const overview = {
  title: 'UW Hangouts',
  description: [
    `UW Hangouts is a web application that I created with Muatasim Qazi and Yash Vig for
  our server-side web development final project. If you played around with our application you would 
  notice three main features: video chatting, messaging, and searching for friends.`,
    <br />,
    <br />,
    `With a timeline of ~1.5 weeks, I am really happy with how much we were able to get done and that 
  we only had to suffer through one all-nighter. Thinking back at how much I learned through this class
  and all of the skills I gained and applied, I can say that all of the stressful Monday nights (the
  assignemnts were due on Tuesday) were worth it.`,
  ],
  timeline: "Nov '18 - Dec '18",
  type: 'Server-Side Web Dev Final Project',
  imgs: [
    {
      img: hangoutsHome,
      caption:
        'Home page where a user can search for a friend to message or video chat',
    },
    {
      img: hangoutsVideo,
      caption: 'Video chat page where two users video chat with one another',
    },
  ],
  feTechnologies: [
    { icon: react, width: '100', margin: '18', name: 'React' },
    { icon: mui, width: '35', margin: '25', name: 'Material UI' },
  ],
  beTechnologies: [
    { icon: golang, width: '35', margin: '22', name: 'Go' },
    { icon: node, width: '35', margin: '18', name: 'Node' },
    { icon: mysql, width: '40', margin: '26', name: 'MySQL' },
    { icon: mongodb, width: '35', margin: '24', name: 'MongoDB' },
    { icon: docker, width: '35', margin: '22', name: 'Docker' },
    { icon: aws, width: '35', margin: '25', name: 'AWS' },
  ],
}

const Hangouts = () => (
  <Layout>
    <SEO title="Hangouts" />
    <ProjectOverview overview={overview} />
  </Layout>
)

export default Hangouts
