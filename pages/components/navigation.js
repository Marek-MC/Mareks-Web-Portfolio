import React, { Component } from 'react'
import Link from 'next/link'

class Navigation extends Component {
  render() {
    return (

      <nav id='navigation'>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/blog/hello-world">
              <a>link: Link</a>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation