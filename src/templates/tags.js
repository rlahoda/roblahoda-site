import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map(post => (
      <li className="infoCard blogListCard" key={post.node.fields.slug}>
        <h2>
          <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
        </h2>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`;

    return (
      <Layout>
        <Helmet title={`${tag}  | ${title}`} />
        <header>
          <div className="pageTopImage"></div>
        </header>

        <main>
          <div className="pageHeading">
            <h1 className="bigTitle">{tag.toUpperCase()}</h1>
            <div className="pageTagline__container">
              <h2 id="projectsTagline" className="pageTagline">
                {tagHeader}
              </h2>
            </div>

            <p className="">
              <Link to="/tags/">Browse all tags</Link>
            </p>
          </div>
          <ul className="blogListContainer noList">{postLinks}</ul>
        </main>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
