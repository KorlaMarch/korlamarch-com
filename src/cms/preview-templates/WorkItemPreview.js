import React from "react";
import PropTypes from "prop-types";
import { WorkItemTemplate } from "../../templates/work-item";
import WorkCard from "../../components/WorkCard";
import moment from "moment";

const WorkItemPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();
  const body = widgetFor("body");

  return (
    <div>
      <WorkCard
        key="a"
        featured={data.featured}
        image={data.images && data.images[0]}
        title={data.title}
        startdate={data.startdate ? moment(data.startdate).format("MMMM YYYY") : ""}
        enddate={data.enddate ? moment(data.enddate).format("MMMM YYYY") : ""}
        slug="#"
        description={data.description}
        body={body}
      />

      <WorkItemTemplate
        content={body}
        description={data.description}
        tags={data.tags}
        title={data.title}
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
