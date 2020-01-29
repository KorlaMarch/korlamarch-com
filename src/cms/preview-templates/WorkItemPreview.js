import React from "react";
import PropTypes from "prop-types";
import { WorkItemTemplate } from "../../templates/work-item";
import WorkCard from "../../components/WorkCard";

const WorkItemPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(["data", "tags"]);
  const images = entry.getIn(["data", "images"]).toJS();

  return (
    <div>
      <WorkCard
        key="a"
        featured={entry.getIn(["data", "featured"])}
        image={images[0]}
        title={entry.getIn(["data", "title"])}
        date={entry.getIn(["data", "startdate"])}
        slug="#"
        description={widgetFor("body").substring(0, 200)}
      />

      <WorkItemTemplate
        content={widgetFor("body")}
        description={entry.getIn(["data", "description"])}
        tags={tags && tags.toJS()}
        title={entry.getIn(["data", "title"])}
      />
    </div>
  );
};

WorkItemPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default WorkItemPreview;
