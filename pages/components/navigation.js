import styles from '../../styles/navigation.module.css'

import React, { Component } from 'react'
import Link from 'next/link'

class Navigation extends Component {
  render() {
    return (

      <div id='navigation' className={styles.navigation}>

        

        <nav>

          <ul>

            <svg id='moon' xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z" />
            </svg>

            <li>
              <Link href="/">
                <a>Origin</a>
              </Link>
            </li>

            <li>
              <Link href="/home">
                <a>Home</a>
              </Link>
            </li>

            <li>
              <Link href="/vault">
                <a>Vault</a>
              </Link>
            </li>

            <li>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </li>

            <li>
              <Link href="/extra">
                <a>Extra</a>
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    )
  }
}

export default Navigation