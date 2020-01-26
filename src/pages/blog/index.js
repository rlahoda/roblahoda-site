import React from "react";
import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

function BlogIndexPage() {
  return (
    <Layout>
      <header>
        <div className="pageTopImage"></div>
      </header>

      <main>
        <div className="pageHeading">
          <h1 className="bigTitle">BLOG</h1>
          <div className="pageTagline__container">
            <h2 id="projectsTagline" className="pageTagline">
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

export default BlogIndexPage;
