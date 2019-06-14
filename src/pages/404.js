import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Icon from "../../content/assets/missing.svg";

import "../utils/css/components/global.css";
import "../utils/normalize.css";
import "../utils/css/screen.css";

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <article className="post-content page-template no-image">
        <div className="post-content-body missing">
          <h1 class="h1-svg"><Icon /></h1>
          <p>
            You found a flaw in the system. Please report this miscreant to me immediately via <a href="https://www.linkedin.com/in/cariefisher" title="LinkedIn" rel="noopener noreferrer" target="_blank">LinkedIn</a> or <a href="https://twitter.com/cariefisher" rel="noopener noreferrer" title="Twitter" target="_blank">Twitter</a>. Thanks!</p><p>
            <blockquote>“If a cluttered desk is a sign of a cluttered mind, of what, then, is an empty desk a sign?” – Albert Einstein</blockquote></p>
        </div>
      </article>
    </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`