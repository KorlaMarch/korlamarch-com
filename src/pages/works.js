import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const WorksPageTemplate = ({ title }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <ul
                style={{
                  listStyle: "disc outside"
                }}
              >
                <li>Monitor - Brown Design Workshop</li>
                <li>Sunlab Consultant</li>
                <li>ENGN 520: Electronic and Circuit TA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

WorksPageTemplate.propTypes = {
  title: PropTypes.string.isRequired
};

const WorksPage = () => {
  return (
    <Layout isNav>
      <WorksPageTemplate title="Works" />
    </Layout>
  );
};

export default WorksPage;
