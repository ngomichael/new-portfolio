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
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  timeline: "March '17 - April '17",
  type: 'Personal Project',
  imgs: [
    {
      img: spotifyHome,
      caption: 'Home page where a user can search for an artist',
    },
    {
      img: spotifyArtistInfo,
      caption: "Artist page where an artist's information is shown.",
    },
  ],
}

const feTechnologies = [
  { icon: js, name: 'JavaScript' },
  { icon: jQuery, name: 'jQuery' },
  { icon: css, name: 'CSS' },
  { icon: html, name: 'HTML' },
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
