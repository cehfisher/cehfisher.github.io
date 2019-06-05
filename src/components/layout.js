/* eslint-disable */
import React from "react"
import { Link } from "gatsby"
import Icon from "../../content/assets/wave.svg";

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <div className="site-wrapper">
        <header className="site-head">
          <div className="site-head-container">
            <nav id="swup" class="site-head-left">
              <ul className="nav" role="menu">
                <li className="nav-home nav-current" role="menuitem">
                  <Link to={`/`}>Home</Link>
                </li>
                <li className="nav-about" role="menuitem">
                  <Link to={`/about`}>About</Link>
                </li>
                <li className="nav-speak" role="menuitem">
                  <Link to={`/speak`}>Speak</Link>
                </li>
                <li className="nav-write" role="menuitem">
                  <Link to={`/write`}>Write</Link>
                </li>
              </ul>
            </nav>
            <div className="site-head-right">
              <div className="social-links">
                <a
                  href="https://twitter.com/cariefisher"
                  title="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <a
                  href="https://www.linkedin.com/in/cariefisher"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://noti.st/cariefisher"
                  title="Noti.st"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Noti.st
                </a>
                <a
                  href="https://www.github.com/cehfisher"
                  title="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </header>
        <main id="site-main" className="site-main">
          <div id="swup2" className="transition-fade">
            {children}
          </div>
        </main>
        <footer className="site-foot">
          &copy; {new Date().getFullYear()} {title}{" "} - <Link to={`/accessibility`}>Accessibility Statement</Link>
        </footer>
      <div class="wave-wrapper">
        <Icon />
      </div>
      </div>
    )
  }
}

export default Layout
