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
import Particles from 'react-particles-js';
import $ from 'jquery';

class Layout extends React.Component {
  componentDidMount () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 10) {
        $('.main-menu').addClass('floatingHeader');
      } else {
        $('.main-menu').removeClass('floatingHeader');
      }
    })
  }

  render() {
    const { title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <div className="site-wrapper">
        <Particles className="snow"
    params={{
          "particles": {
            "number": {
              "value": 60,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#d8bcfb"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000"
              },
              "polygon": {
                "nb_sides": 10
              },
              "image": {
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": true,
                "speed": 0.5,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 10,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 0,
                "size_min": 0,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 200,
              "color": "#ffffff",
              "opacity": 1,
              "width": 2
            },
            "move": {
              "enable": true,
              "speed": 0.5,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": false,
                "mode": "repulse"
              },
              "onclick": {
                "enable": false,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
    	}} />
        <header className="site-head">
          <div className="site-head-container">
            <div className="site-head-right">
              <nav id="swup" className="main-menu">
                <ul className="nav" role="menu">
                  <li className="nav-home" role="menuitem">
                    <Link to={`/`} aria-label="Home"><Icon1 /><span className="hidden">Home</span></Link>
                  </li>
                  <li className="nav-about" role="menuitem">
                    <Link to={`/about`} aria-label="About"><FiSmile /><span className="hidden">About</span></Link>
                  </li>
                  <li className="nav-speak" role="menuitem">
                    <Link to={`/speak`} aria-label="Speak"><Icon2 /><span className="hidden">Speak</span></Link>
                  </li>
                  <li className="nav-write" role="menuitem">
                    <Link to={`/write`} aria-label="Write"><Icon3 /><span className="hidden">Write</span></Link>
                  </li>
                  <li className="nav-accessibility" role="menuitem">
                    <Link to={`/accessibility`} aria-label="Accessibility"><FiHeart /><span className="hidden">Accessibility</span></Link>
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
              <FiTwitter /><span className="hidden">Twitter</span>
            </a></li>
            <li className="social-linkedin"><a
              href="https://www.linkedin.com/in/cariefisher"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin /><span className="hidden">LinkedIn</span>
            </a></li>
            <li className="social-notist"><a
              href="https://noti.st/cariefisher"
              title="Noti.st"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiStar /><span className="hidden">Notist</span>
            </a></li>
            <li className="social-github"><a
              href="https://www.github.com/cehfisher"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub /><span className="hidden">GitHiub</span>
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
