import React from "react";
import PropTypes from "prop-types";
import Layout from "../../components/Layout";
import WorksList from "../../components/WorksList";

export const WorksPage = () => {
  return (
    <Layout isNav>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  Works
                </h2>
                <WorksList />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WorksPage;
