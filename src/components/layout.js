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
        <Particles className="snow" focusable="false" aria-hidden="true"
    params={{
          "particles": {
            "number": {
              "value": 99,
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
                <ul className="nav">
                  <li className="nav-home">
                    <Link to={`/`}><Icon1 /><span className="sr-only">Home</span></Link>
                  </li>
                  <li className="nav-about">
                    <Link to={`/about`}><FiSmile /><span className="sr-only">About</span></Link>
                  </li>
                  <li className="nav-speak">
                    <Link to={`/speak`}><Icon2 /><span className="sr-only">Speak</span></Link>
                  </li>
                  <li className="nav-write">
                    <Link to={`/write`}><Icon3 /><span className="sr-only">Write</span></Link>
                  </li>
                  <li className="nav-accessibility">
                    <Link to={`/accessibility`}><FiHeart /><span className="sr-only">Accessibility</span></Link>
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
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter /><span className="sr-only">Twitter</span>
            </a></li>
            <li className="social-linkedin"><a
              href="https://www.linkedin.com/in/cariefisher"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin /><span className="sr-only">LinkedIn</span>
            </a></li>
            <li className="social-notist"><a
              href="https://noti.st/cariefisher"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiStar /><span className="sr-only">Notist</span>
            </a></li>
            <li className="social-github"><a
              href="https://www.github.com/cehfisher"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub /><span className="sr-only">Github</span>
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
