import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Icon from "../../content/assets/write.svg"

import "../utils/css/components/global.css"
import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="About me"
        keywords={[`blog`, `gatsby`, `javascript`, `writing`]}
      />
      <article className="post-content page-template no-image">
        <div className="post-content-body write">
          <h1 class="h1-svg">
            <Icon />
          </h1>
          <p>
            I absolutely love to write! Some of my past posts focus on topics
            like: accessibility, Commodore 64s, fruit fly genetics, front-end
            development, inclusive design/patterns, SEO, STEM technology, SVGs,
            tech business/culture, The Rock, wild turkeys trying to murder me,
            and more!
          </p>
          <p>
            I have been lucky enough to write for these fine folks in the past:{" "}
            <ul>
              <li>24 Accessibility</li>
              <li>A List Apart</li>
              <li>Code Like a Girl</li>
              <li>Deque Systems</li>
              <li>Envato Tuts+</li>
              <li>Hacker Noon</li>
              <li>Smashing Magazine</li>
              <li>Statuscode</li>
              <li>The Mission</li>
              <li>The Startup</li>
              <li>UX Planet</li>
              <li>and many more</li>
            </ul>
          </p>
          <p>
            Contact me via{" "}
            <a
              href="https://www.linkedin.com/in/cariefisher"
              title="LinkedIn"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>{" "}
            or{" "}
            <a
              href="https://twitter.com/cariefisher"
              rel="noopener noreferrer"
              title="Twitter"
              target="_blank"
            >
              Twitter
            </a>{" "}
            if you'd like me to write for your publication or organization.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
