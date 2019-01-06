import React from 'react'
import { Link } from 'gatsby'
import AboutOverview from '../components/AboutOverview/AboutOverview'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HighlightedLink from '../components/HighlightedLink/HighlightedLink'

const overview = {
  intro: [
    `Hey again! I appreciate you visiting my site and getting to know me a little better. 
    I've lived in Seattle, Washington my whole life and I am a graduating senior majoring in `,
    <HighlightedLink
      site="https://ischool.uw.edu/programs/informatics"
      target="_blank"
      rel="noopener noreferrer"
    >
      Informatics
    </HighlightedLink>,
    ` at the University of Washington (Seattle). 
    I am actively searching for a full-time software developer role here in the 
    Seattle-Bellevue area, so please reach out through `,
    <HighlightedLink
      site="https://www.linkedin.com/in/mhngo/"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </HighlightedLink>,
    ` or email me at michael_ngo@live.com! `,
  ],
  hobbies: [
    `Today, you can find me watching shows on Netflix (I'm currently watching The Good Place and finally 
    starting Game Of Thrones), keeping up with the NBA (Trust the Process), NFL, or the MLB (mostly just 
    the Mariners), weightlifting, or biking!`,
  ],
  experience: [
    `In summer 2018 I interned in Bellevue, Washington at `,
    <HighlightedLink
      site="https://www.limeade.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Limeade
    </HighlightedLink>,
    ` as a front-end software engineer. Most 
    recently, I was a software developer for `,
    <HighlightedLink
      site="https://www.mealmatchup.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Meal Matchup
    </HighlightedLink>,
    ` which is a directed research group at the 
    University of Washington. Take a look at my `,
    <HighlightedLink
      site="https://drive.google.com/file/d/1PyJj4BOHLDTVCYRZOAfWJ72UqeNA6719/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
    >
      resume
    </HighlightedLink>,
    ` if you want to learn more!`,
  ],
}

const About = props => (
  <Layout>
    <SEO title="About Me" />
    <AboutOverview overview={overview} />
  </Layout>
)

export default About
