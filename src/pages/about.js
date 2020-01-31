import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const AboutPageTemplate = ({ title }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div className="content">
                I am a student at Brown University, studying Computer Science
                (Sc.B.) and Engineering (A.B.). My interests lie in robotics,
                computer system and low-level software/hardware. I don't have a
                lot of things here yet. Checkout <a href="/cv.pdf">my resume</a>{" "}
                instead!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired
};

const AboutPage = () => {
  return (
    <Layout isNav>
      <AboutPageTemplate title="Khemarat Boonyapaluk" />
    </Layout>
  );
};

export default AboutPage;
