import React from 'react'
import jQuery from '../icons/jQuery-icon.svg'
import js from '../icons/js-icon.svg'
import css from '../icons/css-icon.svg'
import html from '../icons/html-icon.svg'
import Layout from '../components/layout'
import spotifyHome from '../images/overview/spotifyHome.jpg'
import spotifyArtistInfo from '../images/overview/spotifyArtistInfo.jpg'
import ProjectOverview from '../components/ProjectOverview/ProjectOverview'
import SEO from '../components/seo'

const overview = {
  title: 'Spotify Artist Seach',
  description: [
    `Music is a huge part of my life and Spotify is probably my most used app.
  So why not make a project using Spotify's API? Spotify Artist Search is a web application
  that allows you as a user, to search for an artist and see their photo, top 10 songs,
  and their related artists. I felt that if someone was using my application to find new artists, 
  being able to quickly listen to the artist's most popular songs would be helpful. One of the features 
  that I implemented to help with this is that when you hover over each song, it plays a snippet 
  of the song. If you like the artist, you can go to one of their related artists, go through the 
  same process, and find new artists and songs to listen to!`,
    <br />,
    <br />,
    `Whenever I start a personal project I always try to choose a topic that I would be interested
  and a thing or two that I want to learn. This time it was Spotify and APIs. I
  learned how to interact with APIs and work with async data. I'm glad that I was exposed to this early, because
  at that time I didn't know that I would be working with APIs and async data so often.`,
  ],
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
  feTechnologies: [
    { icon: js, name: 'JavaScript' },
    { icon: jQuery, name: 'jQuery' },
    { icon: css, name: 'CSS' },
    { icon: html, name: 'HTML' },
  ],
  beTechnologies: [],
}

const Spotify = () => (
  <Layout>
    <SEO title="Spotify" />
    <ProjectOverview overview={overview} />
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default Spotify
