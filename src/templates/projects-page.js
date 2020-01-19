import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { withPrefix } from "gatsby";
import IconDisplay from "../components/svg/IconDisplay";

export const ProjectsPageTemplate = ({ title, subtitle, projects }) => {
  function projectsList() {
    const projectsDisplay = projects.map((p, index) => {
      let width = "";

      switch (p.width) {
        case "wide":
          width = "projectsCard-wide";
          break;
        case "med":
          width = "projectsCard-med";
          break;
        default:
          width = "";
          break;
      }

      let technology = p.technology.map(t => {
        return (
          <li className="projectTechnology" key={t}>
            <IconDisplay icon={t} styles="projectIcon" />

            <h4>{t}</h4>
          </li>
        );
      });

      const textDisplay = p.paragraphs.map((para, index) => {
        return <p key={index}>{para.text}</p>;
      });

      return (
        <div className={`infoCard projectsCard ${width}`} key={index}>
          <h2 className="">{p.title}</h2>
          <ul className="noList noListBlock">{technology}</ul>
          <hr />
          {textDisplay}

          {p.alert ? <p className="projectAlert">{p.alert}</p> : ""}
          <h4 className="">
            <a
              className=""
              href={p.linkaddress}
              // onclick="trackOutboundLink('{{ project.linkaddress }}'); return false;"
              target="_blank"
              rel="noopener noreferrer"
            >
              {p.linktitle}
            </a>
          </h4>
          {p.githubaddress ? (
            <h5 className="">
              <a
                className=""
                href={p.githubaddress}
                //  onclick="trackOutboundLink('{{ project.githubaddress }}'); return false;"
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.githubTitle ? p.githubTitle : "View Github Repo"}
              </a>
            </h5>
          ) : (
            ""
          )}
        </div>
      );
    });
    return projectsDisplay;
  }

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

      <div className="projectsGrid">{projectsList()}</div>
    </main>
  );
};

ProjectsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  aboutPhoto: PropTypes.string,
  content: PropTypes.string
};

const ProjectsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <header>
        <div className="pageTopImage"></div>
      </header>
      <ProjectsPageTemplate
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        projects={post.frontmatter.projects}
      />
    </Layout>
  );
};

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ProjectsPage;

export const projectsPageQuery = graphql`
  query ProjectsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        projects {
          title
          linktitle
          linkaddress
          alert
          githubTitle
          githubaddress
          width
          technology
          paragraphs {
            text
          }
        }
      }
    }
  }
`;
