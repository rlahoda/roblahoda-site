import React from "react";
import PropTypes from "prop-types";
import { ProjectsPageTemplate } from "../../templates/projects-page";

const ProjectsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <ProjectsPageTemplate
        title={data.title}
        subtitle={data.subtitle}
        projects={data.projects}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

ProjectsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default ProjectsPagePreview;
