import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import gsap from "gsap";
import { TimelineMax } from "gsap";
import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import IconDisplay from "../components/svg/IconDisplay";
import Tagline from "../components/Tagline";

export const IndexPageTemplate = ({
  backgrounds,
  title,
  heading1,
  heading2,
  subheadings,
  tools,
  intro
}) => {
  let tl = useRef();
  let tl2 = useRef();
  // gsap.registerPlugin(TextPlugin, EasePack);

  function toolDisplay() {
    let toolsArr;
    if (tools.length > 0) {
      toolsArr = tools.map((t, index) => {
        if (t.link) {
          return (
            <li className="homepageMain__Technology" key={index}>
              <a
                className="homepageMain__Icon"
                href={t.link}
                // onclick="trackOutboundLink('{{ tool.link }}'); return false;"
              >
                <IconDisplay
                  className="homepageMain__Icon"
                  icon={t.icon}
                ></IconDisplay>
                <h4>{t.name}</h4>
              </a>
            </li>
          );
        } else {
          return (
            <li className="homepageMain__Technology" key={index}>
              <span className="homepageMain__Icon">
                <IconDisplay
                  className="homepageMain__Icon"
                  icon={t.icon}
                ></IconDisplay>
              </span>
              <h4>{t.name}</h4>
            </li>
          );
        }
      });
    } else {
      return "";
    }
    return toolsArr;
  }

  function getRandom(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min)) + 1;
    return randomNumber;
  }

  function boxesHeaderRandom() {
    tl.current = new TimelineMax();
    for (var i = 0; i < 10; i++) {
      let randomId = getRandom(1, 28);
      let elId = "#nameImage__container--box--" + randomId;
      tl.current.to(elId, 2, { opacity: 0 });
      tl.current.to(elId, 2, { opacity: 1 });
    }
    tl.current.eventCallback("onComplete", boxesHeaderRandom);
  }

  function boxesHeaderFade(event) {
    const id = "#" + event.target.id;
    tl2.current = new TimelineMax();
    tl2.current.to(id, 1.5, { opacity: 0 });
    tl2.current.to(id, 1.5, { opacity: 1 });
  }

  useEffect(() => {
    boxesHeaderRandom();
  });

  function introText() {
    const blurbs = intro.blurbs;
    const introText = blurbs.map((b, index) => (
      <div
        className="infoCard homepageMain__Card homepageMain__Card--blurb"
        key={index}
      >
        <h3>{b.text}</h3>
      </div>
    ));
    return introText;
  }

  function generateImageBoxes(num) {
    const imageBoxes = [];
    for (let index = 0; index < num; index++) {
      imageBoxes.push(
        <div
          key={index}
          className="nameImage__container--box"
          onMouseOver={boxesHeaderFade}
          id={`nameImage__container--box--${index + 1}`}
        />
      );
    }
    return imageBoxes;
  }

  return (
    <React.Fragment>
      <header>
        <div className="graphic__container">
          <div className="nameImage__container"></div>
          {generateImageBoxes(28)}
        </div>
        <div className="name__container">
          <div className="nameSpacer"></div>
          <div className="firstName__container">
            <h1 className="firstName">{heading1}</h1>
          </div>
          <div className="lastName__container">
            <h1 className="bigTitle">{heading2}</h1>
          </div>
          <Tagline />
        </div>
      </header>
      <main>
        <div className="homepageMain__grid">
          <span className="homepageMain__spacer--half"></span>
          <div className="homepageMain__Card homepageMain__Card--links">
            <h3 className="homepageMain__link">
              <a href="projects.html">Projects I've Done</a>
            </h3>
            <h3 className="homepageMain__link">
              <a href="about.html">About Me</a>
            </h3>
            <h3 className="homepageMain__link">
              <a href="contact.html">Contact Me</a>
            </h3>
          </div>
          <span className="homepageMain__spacer--half"></span>
          {introText()}

          <span className="homepageMain__spacer2"></span>
          <div className="infoCard homepageMain__Card homepageMain__ToolsContainer homepageMain__content--whatIUse">
            <h2 className="">My Favorite Tools</h2>
            <ul className="noList noListBlock homepageMain__ToolsList">
              {toolDisplay()}
            </ul>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

IndexPageTemplate.propTypes = {
  images: PropTypes.array,
  title: PropTypes.string,
  heading1: PropTypes.string,
  heading2: PropTypes.string,
  subheadings: PropTypes.array,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  tools: PropTypes.array
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        backgrounds={frontmatter.backgrounds}
        title={frontmatter.title}
        heading1={frontmatter.heading1}
        heading2={frontmatter.heading2}
        subheadings={frontmatter.subheadings}
        tools={frontmatter.tools}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        backgrounds {
          link
        }
        heading1
        heading2
        subheadings {
          text
        }
        intro {
          blurbs {
            text
          }
        }
        tools {
          name
          icon
          link
        }
      }
    }
  }
`;
