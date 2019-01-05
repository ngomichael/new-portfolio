import React from 'react'
import Layout from '../components/layout'
import ProjectOverview from '../components/ProjectOverview/ProjectOverview'
import ufcHomeJPG from '../images/overview/ufcHome.jpg'
import ufcHomeWebP from '../images/overview/ufcHome.webp'
import ufcStatsJPG from '../images/overview/ufcStats.jpg'
import ufcStatsWebP from '../images/overview/ufcStats.webp'

import SEO from '../components/seo'

const overview = {
  title: 'UFC Statistic Displayer',
  description: [
    `My project does exactly what the names suggests, it displays UFC statistics.
  More specifically, it displays UFC fighter statistics. The home page shows you the top 10
  pound for pound fighters and as a user, you pick a fighter you want to know more about. Once you 
  pick a fighter the application takes you to another page where you are able to see 6 different statistics for
  that fighter, where they're from, and their record.`,
  ],
  techDescription: [
    `In my rankings of my favorite projects, this is definitely up there. I just learned so much at
  the end of the project and had so much fun immersing myself in different technologies.
  The most notable 3 were: React, Redux, and React-Router. This project is what really started my 
  love for React and it has only grown ever since.`,
    <br />,
    <br />,
    <h3>React</h3>,
    `What I really enjoyed about React was the way that it makes me think about building apps.
    Understanding that within a feature there are many components that build on top of one another
    and that each component takes care of a small piece of the user interface was really easy for 
    me to understand because of its modularity.`,
    <br />,
    <br />,
    `In addition to what I really liked about React, there were a few things that were a bit 
    challenging. Those two things would be state and lifecycle methods. I didn't really know
    what state was for and what things I would keep in state. Upon realizing that state allows
    me to create components that are dynamic and interactive is when I understood that state 
    is used to hold data or information that will change. It controls how certain elements are
    rendered. React's lifecycle methods also were a point of confusion for me. There were so 
    many methods available for me to use and I didn't know when I should reach for one or when.
    This is still something I need to improve on to this day, but it is something I have 
    gradually gotten better at.`,
    <br />,
    <br />,
    <h3>Redux</h3>,
    `After digging into React for a little while, I noticed that Redux was a popular library 
    among the React community. I looked into the use cases for it and saw the problem it was solving.
    One problem that I saw arising when creating this app was prop drilling. The process of getting data
    to different components would sometimes include passing props down many levels and using components as a way to pass props down
    Even though in this app I was creating it didn't get to the point where it needed Redux just yet, I wanted to incorporate it into my app
    to learn how to use it and to have the skills when I built an app that actually needed it. What I
    liked about Redux was how I could see the problem it was solving right away. Even though I was 
    just starting, I saw how useful Redux was.`,
    <br />,
    <br />,
    `Even though there aren't many different parts to Redux, wrapping my head around the flow and how 
    the parts worked together was the most difficult part. There are actions, action creators 
    reducers, and the store, but how did Redux modify state and where? When I got the basics of
    Redux incorporated into my app is when I started to better understand what was happening.
    Let's say that one of my components needed access to a piece of the state and needed to modify
    it based off of when a button was clicked. The clicked button would dispatch an action which is 
    used by the reducer to figure out how to update the current state. Getting all of the small
    pieces working together was what really helped me figure out how Redux operated.`,
    ,
  ],
  timeline: "Sep '17 - Feb '18",
  type: 'Personal Project',
  imgs: [
    {
      img: ufcHomeWebP,
      fallbackImg: ufcHomeJPG,
      caption: 'Home page where a user chooses a fighter',
    },
    {
      img: ufcStatsWebP,
      fallbackImg: ufcStatsJPG,
      caption:
        'Statistics page where the fighters statistics and information are displayed',
    },
  ],
  feTechnologies: ['React', 'Redux', 'React-Router'],
  beTechnologies: 'None',
}

const UFC = props => (
  <Layout location={props.location}>
    <SEO title="UFC" />
    <ProjectOverview overview={overview} />
  </Layout>
)

export default UFC
