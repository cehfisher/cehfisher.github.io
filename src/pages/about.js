import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Icon from "../../content/assets/about.svg";

import "../utils/css/components/global.css";
import "../utils/normalize.css";
import "../utils/css/screen.css";

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="About me"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body about">
          <Icon />
          <p>
            I have been building websites professionally since the early 2000s
            and currently working as a Senior Accessibility Consultant at{" "}
            <a href="https://www.deque.com/">Deque Systems</a>. I am passionate
            about front-end development, accessibility, and promoting diversity
            in the tech world. I am the creator of the{" "}
            <a href="https://a11y-style-guide.com/style-guide/">
              Accessibility (A11Y) Style Guide
            </a>{" "}
            and{" "}
            <a href="https://www.youtube.com/c/accessibilitytalks">
              Accessibility (A11Y) Talks
            </a>{" "}
            virtual meet-up, designer of the{" "}
            <a href="https://www.bonfire.com/accessibility-cats/">
              A11y Cats T-shirt
            </a>
            , member of the <a href="https://a11yproject.com/">A11y Project</a>{" "}
            and <a href="https://www.24a11y.com/">24a11y</a> teams, and past
            team member and mentor for the{" "}
            <a href="https://air-rallies.org/">OpenAIR Knowbility Challenge</a>.
          </p>
        </div>
      </article>
    </Layout>
  );
};

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
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
);
