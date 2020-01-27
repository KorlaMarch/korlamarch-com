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
      <Link to="/" className="level-item">
        Home
      </Link>
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
      <h3 className="title is-3">My works</h3>
      <ul
        style={{
          listStyle: "disc outside"
        }}
      >
        <li>Monitor - Brown Design Workshop</li>
        <li>Sunlab Consultant</li>
        <li>ENGN 520: Electronic and Circuit TA</li>
      </ul>
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
