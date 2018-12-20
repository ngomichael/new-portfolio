import React from 'react'
import { Link } from 'gatsby'
import react from '../icons/react-icon.svg'
import Layout from '../components/layout'
import spotifyHome from '../images/overview/spotifyHome.png'
import spotifyArtistInfo from '../images/overview/spotifyArtistInfo.png'
import ProjectOverview from '../components/ProjectOverview/ProjectOverview'
import SEO from '../components/seo'

const overview = {
  title: 'Spotify Artist Seach',
  description: ``,
  timeline: 'March 2017 - April 2017',
  type: 'Personal Project',
  imgs: [spotifyHome, spotifyArtistInfo],
}

const feTechnologies = [{ icon: react, width: '60', margin: '18' }]
const beTechnologies = []

const Spotify = () => (
  <Layout>
    <SEO title="Spotify" />
    <ProjectOverview
      overview={overview}
      feTechnologies={feTechnologies}
      beTechnologies={beTechnologies}
    />
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default Spotify
