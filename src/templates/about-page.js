import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";

const AboutPageTemplate = ({ title, picture, content }) => {
  const profile_img = getImage(picture)
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="section">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h2>
            <figure className="image profile" >
              <GatsbyImage image={profile_img} alt="A picture of March" />
            </figure>

            <HTMLContent content={content} />
          </div>
        </div>
      </div>
    </div>
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
    <Layout isNav pageTitle="About">
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
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
