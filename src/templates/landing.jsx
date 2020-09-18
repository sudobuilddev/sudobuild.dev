import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Landing extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />
        <div className="px-4 py-4">
          <div
            className="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between"
          >
            <div className="flex justify-between items-center">
              <Link
                to="/"
                className="inline-block py-2 text-white text-xl font-bold"
              >
                Sudo Build --dev
              </Link>

            </div>
          </div>

          <div className="py-12">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h3
                  className="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl sm:leading-10"
                >
                  Otra comunidad geek.
                </h3>
                <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-100 lg:mx-auto">
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis
                  in accusamus quisquam.
                </p>
              </div>


              <div className="mt-10">
                <ul className="">

                  <li>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-700 text-white">
                          <a href="https://www.alexguaman.com/" rel="noopener noreferrer" target="_blank">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg leading-6 font-medium text-white">Alex Guaman</h4>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit
                          eaque, iste dolor cupiditate blanditiis ratione.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-700 text-white">

                          <a href="https://crisgarlez.com/" rel="noopener noreferrer" target="_blank">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                            </svg>
                          </a>

                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg leading-6 font-medium text-white">Cristhian García Vélez</h4>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit
                          eaque, iste dolor cupiditate blanditiis ratione.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-700 text-white">
                          <a href="https://gabobigale.dev/" rel="noopener noreferrer" target="_blank">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg leading-6 font-medium text-white">Gabriel Jimenez</h4>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit
                          eaque, iste dolor cupiditate blanditiis ratione.
                        </p>
                      </div>
                    </div>
                  </li>

                </ul>
              </div>

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
