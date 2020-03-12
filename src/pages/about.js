import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Icon from "../../content/assets/about.svg"

import "../utils/css/components/global.css"
import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="About me"
        keywords={[`blog`, `gatsby`, `javascript`, `about`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body about">
          <h1 class="h1-svg">
            <Icon />
          </h1>
          <p>
            Carie Fisher is an author, speaker, and developer who is passionate
            about the intersection of front-end code and UX, digital
            accessibility, and promoting diversity in the tech world. Currently,
            employed as a Senior Accessibility Consultant and Trainer at{" "}
            <a
              href="https://www.deque.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Deque Systems
            </a>
            .
          </p>
          <p>
            In her spare time, Carie likes to travel, garden, and engage with
            the accessibility and open source dev communities. She is the
            creator of the{" "}
            <a
              href="https://a11y-style-guide.com/style-guide/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Accessibility (A11Y) Style Guide
            </a>{" "}
            and{" "}
            <a
              href="https://www.youtube.com/c/accessibilitytalks"
              rel="noopener noreferrer"
              target="_blank"
            >
              Accessibility (A11Y) Talks
            </a>{" "}
            virtual meet-up, designer of the{" "}
            <a
              href="https://www.redbubble.com/people/a11ytalks/works/39136088-accessibility-a11y-cats?asc=u&p=triblend-tee"
              rel="noopener noreferrer"
              target="_blank"
            >
              A11y Cats T-shirt
            </a>
            , member of the{" "}
            <a
              href="https://a11yproject.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              A11y Project
            </a>{" "}
            and{" "}
            <a
              href="https://www.24a11y.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              24 Accessibility
            </a>{" "}
            teams, and past team member and mentor for the{" "}
            <a
              href="https://air-rallies.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              OpenAIR Knowbility Challenge
            </a>
            .
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
