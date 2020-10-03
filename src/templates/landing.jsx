import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import Header from "../components/Header/Header"
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Landing extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />
        <Header />
        <div className="px-4 py-4">

          <div className="py-12">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

              <PostListing postEdges={postEdges} />

            </div>
          </div>


        </div>


      </Layout>
    );
  }
}

export default Landing;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query LandingQuery {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
