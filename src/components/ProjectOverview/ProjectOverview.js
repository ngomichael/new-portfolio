import React, { Component } from 'react'
import Layout from '../layout'
import ProjectImage from '../ProjectImage/ProjectImage'
import TechnologyIcon from '../TechnologyIcon/TechnologyIcon'
import styles from './ProjectOverview.module.css'
import aws from '../../icons/aws-icon.svg'
import docker from '../../icons/docker-icon.svg'
import golang from '../../icons/golang-icon.svg'
import mongodb from '../../icons/mongodb-icon.svg'
import mysql from '../../icons/mysql-icon.svg'
import mui from '../../icons/mui-icon.svg'
import node from '../../icons/nodejs-icon.svg'
import react from '../../icons/react-icon.svg'
const feStack = stack => stack.map(tech => <li>{tech}</li>)
const beStack = stack => stack.map(tech => <li>{tech}</li>)

const feTechnologies = [
  { icon: react, width: '60', margin: '18' },
  { icon: mui, width: '35', margin: '25' },
]

const beTechnologies = [
  { icon: golang, width: '35', margin: '22' },
  { icon: node, width: '35', margin: '18' },
  { icon: mysql, width: '40', margin: '26' },
  { icon: mongodb, width: '35', margin: '24' },
  { icon: docker, width: '35', margin: '22' },
  { icon: aws, width: '35', margin: '25' },
]

class ProjectOverview extends Component {
  render() {
    console.log(aws)
    return (
      <div className={styles.container}>
        <h1 className={styles.projectName}>UW Hangouts</h1>
        <div className={styles.overviewContainer}>
          <h2 className={styles.title}>Overview</h2>
          <p className={styles.description}>{this.props.overview}</p>
          <div className={styles.projectImagesContainer}>
            <ProjectImage />
            <ProjectImage />
          </div>
        </div>
        <h2 className={styles.title}>Tech Stack</h2>
        <div className={styles.technologyContainer}>
          <h3 className={styles.subtitle}>Front-End</h3>
          <div className={styles.technologies}>
            {feTechnologies.map(technology => (
              <TechnologyIcon technology={technology} />
            ))}
          </div>
        </div>
        <div className={styles.technologyContainer}>
          <h3 className={styles.subtitle}>Back-End</h3>
          <div className={styles.technologies}>
            {beTechnologies.map(technology => (
              <TechnologyIcon technology={technology} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectOverview
