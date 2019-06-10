import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PostCard from "../components/postCard";
import Icon from "../../content/assets/carie.svg";
import Particles from 'react-particles-js';

import "../utils/css/components/global.css";
import "../utils/normalize.css";
import "../utils/css/screen.css";
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  let postCounter = 0;

  return (
    <Layout location={location} title={siteTitle}>
      <Particles className="snow"
    params={{
          "particles": {
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#8323fa"
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
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.3,
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
              "speed": 1,
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
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `accessibility`]}
      />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h1 className="hidden">Carie Fisher's portfolio website</h1>
          <Icon />
        </header>
      )}
      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++;
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          );
        })}
      </div>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
);
