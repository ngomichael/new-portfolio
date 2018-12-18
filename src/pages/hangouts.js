import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import ProjectOverview from '../components/ProjectOverview/ProjectOverview'
import SEO from '../components/seo'

const overview =
  'UW Hangouts is a project that me and 2 other classmates created for my server-side development class.'
const feStack = ['React', 'Material UI']
const beStack = ['Go', 'Node.js', 'MySQL', 'MongoDB', 'WebRTC', 'Docker', 'AWS']
const imgs = []

const Hangouts = () => (
  <Layout>
    <SEO title="Hangouts" />
    <ProjectOverview overview={overview} feStack={feStack} beStack={beStack} />
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default Hangouts

// ProjectCard.propTypes = {
//   imgs: PropTypes.array,
//   overview: PropTypes.string,
//   feStack: PropTypes.array,
//   beStack: PropTypes.array,
//   ghLink: PropTypes.string,
// }
