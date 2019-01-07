import React from 'react'
import { Link } from 'gatsby'
import AboutOverview from '../components/AboutOverview/AboutOverview'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HighlightedLink from '../components/HighlightedLink/HighlightedLink'

const bold = {
  color: 'black',
  fontWeight: '600',
}

const overview = {
  intro: [
    `Hey again! I appreciate you visiting my site and wanting to get to know me a little more. 
    I've lived in Seattle, Washington my whole life and I am currently a `,
    <span style={bold}>graduating senior ( June 2019)</span>,
    ` majoring in `,
    <HighlightedLink
      site="https://ischool.uw.edu/programs/informatics"
      target="_blank"
      rel="noopener noreferrer"
    >
      Informatics
    </HighlightedLink>,
    ` at the `,
    <span style={bold}>University of Washington (Seattle)</span>,
    `. 
    I am actively searching for `,
    <span style={bold}>
      full-time software developer roles in the Seattle-Bellevue area
    </span>,
    ` so please reach out through `,
    <HighlightedLink
      site="https://www.linkedin.com/in/mhngo/"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </HighlightedLink>,
    ` or `,
    <HighlightedLink site="mailto:michael_ngo@live.com">
      email me
    </HighlightedLink>,
    `. `,
  ],
  hobbies: [
    `Today, you can find me watching shows on Netflix (Right now I'm watching The Good Place and finally 
    starting Game Of Thrones), keeping up with the NBA (Trust the Process), NFL, or the MLB (mostly just 
    the Mariners), weightlifting, or biking!`,
  ],
  experience: [
    `In Summer 2018 I interned in Bellevue, Washington at `,
    <HighlightedLink
      site="https://www.limeade.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Limeade
    </HighlightedLink>,
    ` as a `,
    <span style={bold}>front-end software engineer</span>,
    `. Most 
    recently, I was a `,
    <span style={bold}>software developer</span>,
    ` for `,
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
      site="https://drive.google.com/file/d/1PyJj4BOHLDTVCYRZOAfWJ72UqeNA6719/view"
      target="_blank"
      rel="noopener noreferrer"
    >
      resume
    </HighlightedLink>,
    ` if you would like to learn more!`,
  ],
}

const About = () => (
  <Layout>
    <SEO
      title="About Me"
      keywords={['michael', 'ngo', 'software', 'developer']}
    />

    <AboutOverview overview={overview} />
  </Layout>
)

export default About
