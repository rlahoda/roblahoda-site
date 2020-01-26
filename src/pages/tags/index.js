import React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout>
    <Helmet title={`Tags | ${title}`} />
    <header>
      <div className="pageTopImage"></div>
    </header>

    <main>
      <div className="pageHeading">
        <h1 className="bigTitle">TAGS</h1>
        <div className="pageTagline__container">
          <h2 id="projectsTagline" className="pageTagline"></h2>
        </div>
        <p></p>
      </div>

      <ul className="blogListContainer noList">
        {group.map(tag => (
          <li className="infoCard blogListCard" key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </main>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
