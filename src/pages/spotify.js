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

// What and Why
const overview = {
  title: 'Spotify Artist Seach',
  description: `Music is a huge part of my life and Spotify is probably my most used app.
  So why not make a project using Spotify's API? Spotify Artist Search is a web application
  that allows you as a user to search for an artist and see their photo, top 10 songs,
  and their related artists. I felt that if someone was using my application to find new artists, 
  being able to quickly listen to their most popular songs would be helpful. One of the features 
  that I implemented to help with this is that when you hover over each song, it plays a snippet 
  of the song. If you like the artist, you can go to one of the related artists and do the same!
  
  Whenever I start a personal project I always try and choose a topic that I would be interested in
  to stay motivated and a thing or two that I want to learn. This time it was Spotify and APIs. I
  learned how to interact with APIs and work with async data.
  `,
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
