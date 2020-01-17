import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <header>
          <div class="pageTopImage"></div>
        </header>

        <main>
          <div class="pageHeading">
            <h1 class="bigTitle">Blog</h1>
            <div class="pageTagline__container">
              <h2 id="projectsTagline" class="pageTagline">
                Stuff I Write
              </h2>
            </div>
            <p></p>
          </div>

          <BlogRoll />
        </main>
      </Layout>
    );
  }
}
