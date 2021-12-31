import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Icon from "../../content/assets/accessibility.svg"

import "../utils/css/components/global.css"
import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Accessibility Statement"
        keywords={[`blog`, `gatsby`, `javascript`, `accessibility`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body accessibility">
          <h1 class="h1-svg">
            <Icon />
          </h1>
          <p>
            This website runs a bit more on the wild side for a reason...I
            wanted to prove that a website can be bold, colorful, AND
            accessible. Beyond the things you would expect from an accessible
            website, this one includes both a light and dark mode, plus reduced
            motion options so everyone can experience it in the way they prefer.
          </p>
          <p>
            I am committed to making this website as accessible as possible. I
            am adhering to{" "}
            <a
              href="https://www.w3.org/TR/WCAG21/"
              rel="noopener noreferrer"
              target="_blank"
            >
              WCAG 2.1 AA
            </a>{" "}
            guidelines and using keyboard, mouse, touch, and screen reader tests
            for all my pages.
          </p>
          <p>
            However, I am only human and occasionally make mistakes or miss
            things. If you see something that is inaccessible, please contact me
            via{" "}
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
            </a>
            . Thanks much!
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
