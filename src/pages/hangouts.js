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
import Layout from '../components/layout'
import ProjectOverview from '../components/ProjectOverview/ProjectOverview'
import SEO from '../components/seo'

const overview = {
  title: 'UW Hangouts',
  description:
    'UW Hangouts is a project that me and 2 other classmates created for my server-side development class.',
  timeline: 'June 2018 - September 2018',
  type: 'Personal Project',
}
const feTechnologies = [
  { icon: react, width: '100', margin: '18' },
  { icon: mui, width: '35', margin: '25' },
]

const beTechnologies = [
  { icon: golang, width: '35', margin: '22' },
  { icon: node, width: '35', margin: '18' },
  { icon: mysql, width: '40', margin: '26' },
  { icon: mongodb, width: '35', margin: '24' },
  { icon: docker, width: '35', margin: '22' },
  { icon: aws, width: '35', margin: '25' },
]
const imgs = []

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
