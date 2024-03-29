import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FiMoreHorizontal } from "react-icons/fi"
import Layout from "../components/layout"
import SEO from "../components/seo"

class UXRPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          canonical={post.frontmatter.canonical}
        />
        <article
          className={`post-content ${post.frontmatter.thumbnail || `no-image`}`}
        >
          <header className="post-content-header">
            <h1 className="post-content-title">{post.frontmatter.title}</h1>

            {post.frontmatter.description && (
              <p className="post-content-excerpt">
                {post.frontmatter.description}
              </p>
            )}

            <p class="publishedplace">
              <FiMoreHorizontal className="dots-svg" />
              {post.frontmatter.canonical && (
                <p className="published">
                  Originally published on{" "}
                  <a
                    className="published"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`${post.frontmatter.canonical}/`}
                  >
                    {post.frontmatter.published}
                  </a>
                </p>
              )}
              {post.frontmatter.pub_date && (
                <p className="published">{post.frontmatter.pub_date}</p>
              )}
            </p>
          </header>

          {post.frontmatter.thumbnail && (
            <div className="post-content-image">
              <Img
                className="kg-image"
                fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
                alt={post.frontmatter.title}
              />
            </div>
          )}
          <div
            className="post-content-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <footer className="post-content-footer">
            {/* There are two options for how we display the byline/author-info.
        If the post has more than one author, we load a specific template
        from includes/byline-multiple.hbs, otherwise, we just use the
        default byline. */}
          </footer>
        </article>
      </Layout>
    )
  }
}

export default UXRPostTemplate

export const pageQuery = graphql`
  query UXRPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        published
        pub_date
        canonical
        tags
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
`
