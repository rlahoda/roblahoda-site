import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { withPrefix } from "gatsby";
import SvgTwitter from "../components/svg/Twitter";
import SvgGithub from "../components/svg/Github";
import SvgEmail from "../components/svg/Email";
import SvgCodepen from "../components/svg/Codepen";
import SvgDrupal from "../components/svg/Drupal";
import SvgLinkedIn from "../components/svg/LinkedIn";

export const ContactPageTemplate = ({ title, subtitle, contactList }) => {
  const contactIcon = icon => {
    switch (icon) {
      case "twitter": {
        return <SvgTwitter />;
      }
      case "github": {
        return <SvgGithub />;
      }
      case "email": {
        return <SvgEmail />;
      }
      case "codepen": {
        return <SvgCodepen />;
      }
      case "drupal": {
        return <SvgDrupal />;
      }
      case "linkedin": {
        return <SvgLinkedIn />;
      }
    }
  };
  console.log(title, subtitle, contactList);

  function contactDisplay() {
    const contacts = contactList.map(c => {
      return (
        <li className="infoCard contactCard" key={c.title}>
          <a
            className="no-border contactIcon"
            href={c.link}
            // onclick="trackOutboundLink('{{ contact.linkaddress }}'); return false;"
            target="_blank"
            rel="noopener noreferrer"
          >
            {contactIcon(c.icon)}
          </a>
          <h2 className="">
            <a
              className=""
              href={c.link}
              // onclick="trackOutboundLink('{{ contact.linkaddress }}'); return false;"
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.title}
            </a>
          </h2>
        </li>
      );
    });
    return contacts;
  }

  return (
    <React.Fragment>
      <main>
        <div className="pageHeading">
          <h1 className="bigTitle">{title}</h1>
          <div className="pageTagline__container">
            <h2 id="projectsTagline" className="pageTagline">
              {subtitle}
            </h2>
          </div>
          <p></p>
        </div>
        <div className="contactContainer">
          <ul className="noList noListBlock contactGrid">{contactDisplay()}</ul>
        </div>
      </main>
    </React.Fragment>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  contactList: PropTypes.array
};

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <header>
        <div className="pageTopImage"></div>
      </header>
      <ContactPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        contactList={post.frontmatter.contactList}
      />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactPage;

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        contactList {
          title
          link
          icon
        }
      }
    }
  }
`;
