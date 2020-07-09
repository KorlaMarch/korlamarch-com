import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";

export const IndexPageTemplate = ({ title, subheading, intro }) => (
  <div
    className="container"
    style={{
      maxWidth: "40rem",
      paddingLeft: "1rem",
      paddingRight: "1rem"
    }}
  >
    <section
      className="section"
      style={{
        marginTop: "5rem"
      }}
    >
      <div className="container">
        <h1
          className="title is-1 has-text-centered is-uppercase"
          style={{
            fontFamily: "Love Ya Like A Sister"
          }}
        >
          {title}
        </h1>
        <p className="subtitle has-text-centered">{subheading}</p>
      </div>
    </section>
    <nav className="level">
      <Link to="/works" className="level-item">
        Works
      </Link>
      <Link to="/about" className="level-item">
        About
      </Link>
      <a href="/cv.pdf" className="level-item">
        CV
      </a>
    </nav>
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
          <div>
            <p className="heading">Github</p>
            <a className="title" href="https://github.com/KorlaMarch/">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">LinkedIn</p>
            <a className="title" href="https://www.linkedin.com/in/khemarat-boonyapaluk/">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Codeforce</p>
            <a className="title" href="https://codeforces.com/profile/korla.march">
              <i class="fas fa-code"></i>
            </a>
          </div>
        </div>
      </nav>
    </section>
  </div>
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
