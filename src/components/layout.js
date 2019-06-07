/* eslint-disable */
import React from "react"
import { Link } from "gatsby"
import Icon1 from "../../content/assets/home.svg";
import Icon2 from "../../content/assets/mic.svg";
import Icon3 from "../../content/assets/pen.svg";
import IconBG from "../../content/assets/background.svg";
import { FiHome } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiSmile } from 'react-icons/fi';
import { FiPenTool } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { FiStar } from 'react-icons/fi';
import { FiMic } from 'react-icons/fi';
import { FiHeart } from 'react-icons/fi';

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <div className="site-wrapper">
        <header className="site-head">
          <div className="site-head-container">
            <div className="site-head-right">
              <nav id="swup">
                <ul className="nav" role="menu">
                  <li className="nav-home" role="menuitem">
                    <Link to={`/`} aria-label="Home"><Icon1 /><span class="hidden">Home</span></Link>
                  </li>
                  <li className="nav-about" role="menuitem">
                    <Link to={`/about`} aria-label="About"><FiSmile /><span class="hidden">About</span></Link>
                  </li>
                  <li className="nav-speak" role="menuitem">
                    <Link to={`/speak`} aria-label="Speak"><Icon2 /><span class="hidden">Speak</span></Link>
                  </li>
                  <li className="nav-write" role="menuitem">
                    <Link to={`/write`} aria-label="Write"><Icon3 /><span class="hidden">Write</span></Link>
                  </li>
                  <li className="nav-accessibility" role="menuitem">
                    <Link to={`/accessibility`} aria-label="Accessibility"><FiHeart /><span class="hidden">Accessibility</span></Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main id="site-main" className="site-main">
          <div id="swup2" className="transition-fade">
            {children}
          </div>
        </main>
        <footer className="site-foot">
          <ul className="nav">
            <li className="social-twitter"><a
              href="https://twitter.com/cariefisher"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter /><span class="hidden">Twitter</span>
            </a></li>
            <li className="social-linkedin"><a
              href="https://www.linkedin.com/in/cariefisher"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin /><span class="hidden">LinkedIn</span>
            </a></li>
            <li className="social-notist"><a
              href="https://noti.st/cariefisher"
              title="Noti.st"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiStar /><span class="hidden">Notist</span>
            </a></li>
            <li className="social-github"><a
              href="https://www.github.com/cehfisher"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub /><span class="hidden">GitHiub</span>
            </a></li>
          </ul>
          <p>&copy; {new Date().getFullYear()} {title}{" "}</p>
        </footer>
        <IconBG />
      </div>
    )
  }
}

export default Layout
