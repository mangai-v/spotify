import React from 'react'
import Logo from '../Pages/HeaderComponent/Logo'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const UserLeftBlock = () => {
    return (
        <div className="userLeftBlock">
        <div className="logo">
          <Logo />
          <Router>
            <div className="leftcontent">
              <ul>
                <li>
                  <span>
                    <i class="fas fa-home"></i>
                  </span>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <span><i class="fas fa-search"></i></span>
                  <Link to="/">Search</Link>
                </li>
                <li>
                  <span>||\</span>
                  <Link to="/">Your Library</Link>
                </li>
                <main id="gap">
                <li>
                  <span><i class="fas fa-plus-square"></i></span>
                  <Link to="/">Create List</Link>
                </li>
                <li>
                  <span><i class="fas fa-heart"></i></span>
                  <Link to="/">Liked songs</Link>
                </li>
                </main>
                <div id="linelighter"></div>

                <div id="myplay">My Playlist #1</div>
        
                <div id="myinstall">
                <li>
                  <span><i class="fas fa-arrow-circle-down"></i></span>
                  <Link to="/">Install App</Link>
                </li></div>
              </ul>
            </div>
          </Router>
        </div>
      </div>
    )
}

export default UserLeftBlock
