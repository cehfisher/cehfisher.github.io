import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Icon from "../../content/assets/write.svg";

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
        <div className="post-content-body write">
          <Icon />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu
            turpis rutrum, malesuada massa in, aliquet metus. Aliquam faucibus
            efficitur neque, nec blandit dui varius non. Phasellus neque nulla,
            aliquet id cursus a, blandit sit amet purus. Fusce nisi nisl,
            lacinia id dolor eleifend, dignissim aliquet nulla. Nullam
            ullamcorper luctus blandit. Phasellus egestas lacus sit amet nulla
            pulvinar, in tristique ante tempus. Aliquam erat volutpat. Nam
            efficitur vel purus nec mollis. Curabitur eu malesuada leo. In et
            nisl sit amet arcu lobortis ultricies a lobortis nulla. Duis ut nibh
            ut dui molestie tempor in vitae urna. Mauris id metus vitae felis
            convallis varius eu vitae leo. Maecenas et augue ullamcorper,
            placerat metus in, eleifend elit. Aenean porta sem non lorem
            imperdiet blandit. Pellentesque elit purus, imperdiet at erat eget,
            sodales hendrerit massa. Fusce imperdiet metus arcu, non ultrices
            sem rutrum nec. Sed vehicula nec ligula vel facilisis. In vitae
            mattis tellus, sed faucibus nisl. Curabitur porttitor mauris at
            ultrices vehicula. Etiam et nulla placerat, egestas mi nec, finibus
            lorem. Nulla at felis nec nisl malesuada elementum ut ut nisl. Etiam
            augue lacus, blandit sit amet auctor sed, aliquet eget risus. Duis
            mi augue, vestibulum non turpis a, congue placerat enim. Sed non
            convallis tortor. Nam semper pretium aliquam. Mauris augue sapien,
            ullamcorper et bibendum ac, condimentum non nisl. Mauris finibus id
            neque id hendrerit. Donec dictum pulvinar erat. Fusce aliquam urna
            ut nunc rutrum viverra ut vitae ipsum. Suspendisse risus lectus,
            aliquet at metus non, pretium efficitur tellus. Nulla erat lectus,
            blandit in elit in, elementum eleifend enim. Quisque a eros sit amet
            quam finibus aliquam. Nulla accumsan sit amet orci et eleifend.
            Curabitur id fermentum sem, vitae efficitur dolor. Phasellus
            pulvinar efficitur dolor, nec rhoncus lectus tempus ac.
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
