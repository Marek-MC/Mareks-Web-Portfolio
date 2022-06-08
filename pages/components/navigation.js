import "./Navigation.css"
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (

      <nav id='navigation'>

        <ul>

          <li>
            <Link className='navigationLink' to='/'>Home</Link>
          </li>

          <li>
            <Link className='navigationLink' to='/projects'>Projects</Link>
          </li>

          <li>
            <Link className='navigationLink' to='/extras'>Extra</Link>
          </li>

        </ul>

      </nav>
    )
  }
}

export default Navigation