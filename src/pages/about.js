import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";

export const AboutPageTemplate = ({ title, picture }) => {
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
                <Img fluid={picture.fluid} alt="A picture of March" />
              </figure>

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
  title: PropTypes.string.isRequired,
  picture: PropTypes.object
};

const AboutPage = ({ data }) => {
  return (
    <Layout isNav>
      <AboutPageTemplate title="Khemarat Boonyapaluk"
        picture={data.allImageSharp.edges &&
          data.allImageSharp.edges[0].node} />
    </Layout>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        allImageSharp(filter: {fluid: {originalName: {eq: "profile.jpg"}}}) {
          edges {
            node {
              fluid(maxWidth: 512) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <AboutPage data={data} />}
  />
);