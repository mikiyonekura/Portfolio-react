import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>PORTFOLIO</h3>
      </div>

      <nav>
        <ul>
            <li>
                <Link to ="/">home</Link>
            </li>
            <li>
                <Link to ="/blog">blog</Link>
            </li>
            <li>
                <Link to ="/sns">sns</Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
