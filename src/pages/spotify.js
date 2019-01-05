import React from 'react'
import Layout from '../components/layout'
import spotifyHomeJPG from '../images/overview/spotifyHome.jpg'
import spotifyHomeWebP from '../images/overview/spotifyHome.webp'
import spotifyArtistInfoJPG from '../images/overview/spotifyArtistInfo.jpg'
import spotifyArtistInfoWebP from '../images/overview/spotifyArtistInfo.webp'
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
  ],
  techDescription: [
    `Whenever I start a personal project I always try to choose a topic that I would be interested
  and a thing or two that I want to learn. This time it was Spotify and APIs. I
  learned how to interact with APIs and work with async data. I'm glad that I was exposed to this early, because
  at that time I didn't know that I would be working with APIs and async data so often.`,
    <br />,
    <br />,
    <h3>jQuery </h3>,
    `I took my first class that taught JavaScript at a community college and I wanted to put the
    skills I learned to use. I learned jQuery in this class which was the very first JavaScript 
    library that I learned up to that point. It was exciting adding something new to my web development toolbelt!
    This felt very familiar to me because just like using 'document.getElementById' I would use
    '$('#className')' instead. jQuery was a little funny looking at first with all of the dollar signs,
    but otherwise it was easy to use and understand.
    `,
    <br />,
    <br />,
    <h3>Spotify API and Asynchronous Data</h3>,
    `I believe up to this point I haven't had to work with with asynchronous behavior.
    My first time was when I started to make requests to the Spotify API. I used
    jQuery's ajax function to make GET requests to Spotify's API to get an artist's songs,
    image, and related artists.`,
    <br />,
    <br />,
    `Learning about the different types of requests, headers, and how to retrieve 
    the data I got back if the request succeeded was a great learning experience, but not easy at the time. 
    The two most challenging parts about this application was making these asynchronous requests and parsing through 
    the JSON for the data that I was looking for. I think if I were to change anything about this project, 
    I would want to make more requests that used different methods that they allowed like POST, PUT, and DELETE so
    that way I would have had that experience, understood how to make those requests, and understood what those 
    requests did. 
    `,
  ],
  timeline: "March '17 - April '17",
  type: 'Personal Project',
  imgs: [
    {
      img: spotifyHomeWebP,
      fallbackImg: spotifyHomeJPG,
      caption: 'Home page where a user can search for an artist',
    },
    {
      img: spotifyArtistInfoWebP,
      fallbackImg: spotifyArtistInfoJPG,
      caption: "Artist page where an artist's information is shown.",
    },
  ],
  feTechnologies: ['JavaScript', 'jQuery', 'CSS', 'HTML'],
  beTechnologies: 'None',
}

const Spotify = props => (
  <Layout location={props.location}>
    <SEO title="Spotify" />
    <ProjectOverview overview={overview} />
  </Layout>
)

export default Spotify
