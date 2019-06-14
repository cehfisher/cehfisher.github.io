import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Icon from "../../content/assets/speak.svg";

import "../utils/css/components/global.css";
import "../utils/normalize.css";
import "../utils/css/screen.css";

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="About me"
        keywords={[`blog`, `gatsby`, `javascript`, `speaking`]}
      />
      <article className="post-content page-template no-image">
        <div className="post-content-body speak">
          <h1 class="h1-svg"><Icon /></h1>
          <p>When I have a great idea, I can't keep it to myself!</p><p>Between client trainings and conference talks, I love to share some of the knowledge I've gained these past 15 years or so in the tech business. I am always looking for opportunities to speak - especially in tropical locations in winter (it's cold in Wisconsin)!</p><p>Here are some of the places I've been fortunate enough to speak at:<ul><li>a11yTO</li><li>DrupalCon</li><li>Drupal camps</li><li>WordSesh</li><li>WordPress Campus</li><li>various client trainings</li></ul></p><p>For more info, see my <a href="https://noti.st/cariefisher" rel="noopener noreferrer" target="_blank">speaking portfolio on Noti.st</a></p>
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
