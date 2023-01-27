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
            Carie Fisher is an author, speaker, and developer with over 20 years
            of experience in the technology sector. Carie is the Director of
            Digital Accessibility at Testlio and is a Ph.D. candidate in
            Human-Computer Interactions at Iowa State University, focusing on XR
            technology. She is passionate about the intersection of front-end
            code and UX, digital accessibility, and diversity in technology.
          </p>
          <p>
            In her spare time, Carie likes to travel, garden, and engage with
            the accessibility and open-source dev communities on projects such
            as the{" "}
            <a
              href="https://a11y-style-guide.com/style-guide/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Accessibility (A11Y) Style Guide
            </a>
            ,{" "}
            <a
              href="http://a11ytalks.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Accessibility (A11Y) Talks
            </a>{" "}
            virtual meet-up, and the creator of the{" "}
            <a
              href="https://www.redbubble.com/shop/ap/39136088"
              rel="noopener noreferrer"
              target="_blank"
            >
              A11y Cats
            </a>{" "}
            design. She recently completed writing the evergreen accessibility
            course{" "}
            <a
              href="https://web.dev/learn/accessibility"
              rel="noopener noreferrer"
              target="_blank"
            >
              Learn Accessibility
            </a>{" "}
            with Google’s web.dev team.
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
