import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Content, { HTMLContent } from "../components/Content";

import Layout from "../components/Layout";

export const IndexPageTemplate = ({
  title, 
  subheading,
  intro,
  content,
  contentComponent
}) => {

  const PostContent = contentComponent || Content;

  return (
    <>
    <div className="index-header">
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
      <div className="has-background-white">
        <nav
          className="container level py-1 px-2"
          style={{
            maxWidth: "40rem"
          }}
        >
          <Link to="/works" className="level-item index-nav">
            Works
          </Link>
          <Link to="/blog" className="level-item index-nav">
            Blog
          </Link>
          <Link to="/about" className="level-item index-nav">
            About
          </Link>
          <a href="/cv.pdf" className="level-item index-nav">
            CV
          </a>
        </nav>
      </div>
    </div>
    <div
      className="container"
      style={{
        maxWidth: "45rem",
        paddingLeft: "1rem",
        paddingRight: "1rem"
      }}
    >
      <p>{intro}</p>
      <section className="section">
        <PostContent content={content} />
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
};

IndexPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  intro: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        intro={frontmatter.introText}
        content={html}
        contentComponent={HTMLContent}
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
      html
      frontmatter {
        title
        subheading
        introText
      }
    }
  }
`;
