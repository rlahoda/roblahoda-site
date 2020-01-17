import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { withPrefix } from "gatsby";

export const AboutPageTemplate = ({
  title,
  subtitle,
  aboutPhoto,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <main>
      <div className="pageHeading">
        <h1 className="bigTitle">{title}</h1>
        <div className="pageTagline__container">
          <h2 id="projectsTagline" className="pageTagline">
            {subtitle}
          </h2>
        </div>
      </div>

      <div className="aboutContainer">
        <div className="infoCard aboutCard aboutInfoMain">
          <PageContent content={content} />
          <img
            className="aboutPicture"
            src={`${withPrefix("/")}${aboutPhoto}`}
            alt="A photo of me"
          />
        </div>
      </div>
    </main>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  aboutPhoto: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <header>
        <div className="pageTopImage"></div>
      </header>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        subtitle={post.frontmatter.subtitle}
        aboutPhoto={post.frontmatter.aboutPhoto}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        aboutPhoto
      }
    }
  }
`;
