import React from "react";
import Layout from "../../components/Layout";
import SvgEmail from "../../components/svg/Email";

function Index() {
  return (
    <Layout>
      <header>
        <div className="pageTopImage"></div>
      </header>

      <main>
        <div className="pageHeading">
          <h1 className="bigTitle">CONTACT</h1>
          <div className="pageTagline__container">
            <h2 id="projectsTagline" className="pageTagline">
              How To Reach Me
            </h2>
          </div>
          <p></p>
        </div>
        <div className="contactContainer">
          <ul className="noList noListBlock contactGrid">
            <li className="infoCard contactCard">
              <a
                className="no-border"
                href="mailto:rob@roblahoda.com"
                onclick="trackOutboundLink('mailto:rob@roblahoda.com'); return false;"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgEmail className="icons contactIcon" />
              </a>
              <h2 className="">
                <a
                  className=""
                  href="mailto:rob@roblahoda.com"
                  onclick="trackOutboundLink('mailto:rob@roblahoda.com'); return false;"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  >
                </a>
              </h2>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}

export default Index;
