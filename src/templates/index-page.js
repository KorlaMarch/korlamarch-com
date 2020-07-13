import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";

export const IndexPageTemplate = ({ title, subheading, intro }) => (
  <>
  <div className="container index-header">
    <section className="section">
      <div className="container">
        <h1
          className="title is-1 has-text-centered is-uppercase"
          style={{
            fontFamily: "Itim"
          }}
        >
          {title}
        </h1>
        <p className="subtitle has-text-centered">{subheading}</p>
      </div>
    </section>
    <nav className="level has-background-white py-1 px-2">
      <Link to="/works" className="level-item index-nav">
        Works
      </Link>
      <Link to="/about" className="level-item index-nav">
        About
      </Link>
      <a href="/cv.pdf" className="level-item index-nav">
        CV
      </a>
    </nav>
  </div>
  <div
  className="container"
  style={{
    maxWidth: "40rem",
    paddingLeft: "1rem",
    paddingRight: "1rem"
  }}
  >
    <p>{intro}</p>
    <section className="section">
      <h3 className="title is-3">What am I doing right now!</h3>
      <ul
        style={{
          listStyle: "disc outside"
        }}
      >
        <li>Firmware Engineer - an Open Source Vantilator Design Group</li>
        <li>Student Researcher - Bahar Lab (working on Casual Learning and Planning in robot)</li>
        <li>Monitor - Brown Design Workshop</li>
        <li>Sunlab Consultant</li>
        <li>ENGN 520: Electronic and Circuit TA</li>
        <li>Many hard computer classes ._.</li>
        <li>Surviving a pendamic...</li>
      </ul>
    </section>
    <section className="section">
      <nav className="level">
        <div className="level-item has-text-centered">
          <a href="https://github.com/KorlaMarch/">
            <p className="heading">Github</p>
            <div className="title">
              <i class="fab fa-github"></i>
            </div>
          </a>
        </div>
        <div className="level-item has-text-centered">
          <a href="https://www.linkedin.com/in/khemarat-boonyapaluk/">
            <p className="heading">LinkedIn</p>
            <div className="title">
              <i class="fab fa-linkedin"></i>
            </div>
          </a>
        </div>
        <div className="level-item has-text-centered">
          <a href="https://codeforces.com/profile/korla.march">
            <p className="heading">Codeforce</p>
            <div className="title">
              <i class="fas fa-code"></i>
            </div>
          </a>
        </div>
      </nav>
    </section>
  </div>
  </>
);

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  intro: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        intro={frontmatter.introText}
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
        subheading
        introText
      }
    }
  }
`;
