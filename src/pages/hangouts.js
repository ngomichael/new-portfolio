import React from 'react'
import hangoutsHomeJPG from '../images/overview/hangoutsHome.jpg'
import hangoutsHomeWebP from '../images/overview/hangoutsHome.webp'
import hangoutsVideoJPG from '../images/overview/hangoutsVideo.jpg'
import hangoutsVideoWebP from '../images/overview/hangoutsVideo.webp'
import Layout from '../components/layout'
import ProjectOverview from '../components/ProjectOverview/ProjectOverview'
import SEO from '../components/seo'

const overview = {
  title: 'UW Hangouts',
  description: [
    `UW Hangouts is a web application that I created with Muatasim Qazi and Yash Vig for
  our final project for our server-side web development class. If you played around with our application you would 
  notice three main features: video chatting, messaging, and searching for friends.`,
  ],
  techDescription: [
    `With a timeline of ~1.5 weeks, I am really happy with how much we were able to get done and that 
  we only had to suffer through one all nighter. Thinking back at how much I learned through this class
  and all of the skills I gained and applied, I can say that all of the stressful Monday nights (the
  assignments were due on Tuesday) were worth it.`,
    <br />,
    <br />,
    <h3>Go, Node, and Docker</h3>,
    `This class was the first time I really did anything along the lines of creating my own APIs and 
    learning server-side technologies. In this project, my group and I developed
    the authentication of our app in Go, our messaging service as a microservice using Node, and we deployed all
    of our servers using Docker and AWS. We all worked together, but my main task
    was implementing authentication for the app. I utilized REDIS for storing session tokens and a MySQL
    database to store users and both databases talked to our Go gateway server.`,
    <br />,
    <br />,
    `With all of these server-side technologies being so new and fresh, we ran into a few problems. 
    Running Docker containers and making sure those are always up was 
    one of the biggest problems we faced. Also, creating a microservice and making sure that it gets forwarded the 
    correct request, returns the correct data we asked for, and was still up were all things 
    we needed to make sure of. In the end, we did get it working and two people were able to video chat with each other!`,
    <br />,
    <br />,
    <h3>End-to-End Application</h3>,
    `In addition to creating the servers for our project, we also had to implement the client.
    This was where we made the requests to the APIs we created and displayed the information
    that was returned. This was the first time I felt that I had good grasp on using fetch
    to make asynchronous calls to APIs. Through this class and project, I learned not only
    server-side skills, but developed a better understanding of making API calls.`,
  ],
  timeline: "Nov '18 - Dec '18",
  type: 'Server-Side Web Dev Final Project',
  imgs: [
    {
      img: hangoutsHomeWebP,
      fallbackImg: hangoutsHomeJPG,
      caption:
        'Home page where a user can search for a friend to message or video chat',
    },
    {
      img: hangoutsVideoWebP,
      fallbackImg: hangoutsVideoJPG,
      caption: 'Video chat page where two users video chat with one another',
    },
  ],
  feTechnologies: ['React', 'Material UI'],
  beTechnologies: ['Go', 'Node', 'MySQL', 'MongoDB', 'Docker', 'AWS'],
}

const Hangouts = () => (
  <Layout>
    <SEO title="Hangouts" />
    <ProjectOverview overview={overview} />
  </Layout>
)

export default Hangouts
