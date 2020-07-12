import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";

export const AboutPageTemplate = ({ title, picture, content }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <figure className="image profile" >
                <Img fluid={picture.childImageSharp.fluid} alt="A picture of March" />
              </figure>

              <HTMLContent content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.object,
  content: PropTypes.node.isRequired
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout isNav>
      <AboutPageTemplate
        title={post.frontmatter.title}
        picture={post.frontmatter.image}
        content={post.html} />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
