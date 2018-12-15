import React, { Component } from 'react'
import { Link } from 'gatsby'
import styles from './Project.module.css'

class Project extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <Link to={this.props.to}>
        <div className={styles.project} />
      </Link>
    )
  }
}

export default Project
