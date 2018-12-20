import React from 'react'
import { Link } from 'gatsby'
import jQuery from '../icons/jQuery-icon.svg'
import js from '../icons/js-icon.svg'
import css from '../icons/css-icon.svg'
import html from '../icons/html-icon.svg'
import Layout from '../components/layout'
import spotifyHome from '../images/overview/spotifyHome.png'
import spotifyArtistInfo from '../images/overview/spotifyArtistInfo.png'
import ProjectOverview from '../components/ProjectOverview/ProjectOverview'
import SEO from '../components/seo'

const overview = {
  title: 'Spotify Artist Seach',
  description: ``,
  timeline: "March '17 - April '17",
  type: 'Personal Project',
  imgs: [spotifyHome, spotifyArtistInfo],
}

const feTechnologies = [
  { icon: js },
  { icon: jQuery },
  { icon: css },
  { icon: html },
]
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
