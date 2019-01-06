import React from 'react'
import Layout from '../components/layout'
import whiteboardHomeJPG from '../images/overview/whiteboardHome.jpg'
import whiteboardHomeWebP from '../images/overview/whiteboardHome.webp'
import ProjectOverview from '../components/ProjectOverview/ProjectOverview'

import SEO from '../components/seo'

const overview = {
  title: 'Online Whiteboard',

  description: [
    `This project for me was the start of making more than just static websites.
  This web application allows you to draw on the whiteboard, erase, and clear the whiteboard. The
  options you have when drawing is the color and the thickness of the stroke.`,
  ],
  techDescription: [
    `My Online Whiteboard project is my very first project where I
  used more than 25 lines of JavaScript! I used this project as my first
  taste of JavaScript and this came with a ton of headaches and 
  challenges, but it's like that sometimes. This jumpstarted my appreaction for JavaScript
  and I haven't stopped working with it since.`,
    <br />,
    <br />,
    <h3>DOM (Document Object Model)</h3>,
    `One of the biggest things I learned how to do was manipulate the DOM. Throughout
    my application I used document.getElementById or document.getElementByClassName to
    get access to the elements I needed. When I got the elements I needed, I added many 
    event listeners to them. This was the first way I learned how to use JavaScript to 
    respond based off of the user's actions and it was extremely exciting`,
    <br />,
    <br />,
    <h3>DRY</h3>,
    `DRY which stands for 'Don't repeat yourself is a principle that I learned early on. 
    When I started writing my event listeners for very similar elements I only ended up
    changing a few things and the rest of the code was the same. This is where learned to
    write functions so I didn't have to write the same thing over and over again. The 
    DRY principle is a good one to follow, but like a lot of other things, don't follow 
    it just to follow it, follow it when it makes sense to.`,
  ],
  timeline: "Dec '16 - March '17",
  type: 'Personal Project',
  imgs: [
    {
      img: whiteboardHomeWebP,
      fallbackImg: whiteboardHomeJPG,
      caption:
        'Home page where a user can draw what they want on the whiteboard',
    },
  ],
  feTechnologies: ['JavaScript', 'CSS', 'HTML'],
  beTechnologies: 'None',
}

const Whiteboard = props => (
  <Layout>
    <SEO title="Whiteboard" />
    <ProjectOverview overview={overview} />
  </Layout>
)

export default Whiteboard
