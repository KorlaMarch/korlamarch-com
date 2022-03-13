import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Slider from "react-slick";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const WorkItemTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  images
}) => {
  const PostContent = contentComponent || Content;
  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            {images ? (
              <div
                style={{
                  marginBottom: "2rem",
                  padding: "40px",
                  background: "#d6400033"
                }}
              >
                <Slider dots infinite speed="500">
                  {images.map(image => (
                    <div>
                      <GatsbyImage image={getImage(image)} />
                    </div>
                  ))}
                </Slider>
              </div>
            ) : null}
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

WorkItemTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const WorkItem = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout isNav>
      <WorkItemTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Khemarat Boonyapaluk">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        images={post.frontmatter.images}
      />
    </Layout>
  );
};

WorkItem.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default WorkItem;

export const pageQuery = graphql`
  query WorkItemByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        startdate(formatString: "MMMM YYYY")
        enddate(formatString: "MMMM YYYY")
        title
        description
        images {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        tags
      }
    }
  }
`;
