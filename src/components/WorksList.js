import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import WorkCard from "./WorkCard";

class WorksList extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <WorkCard
              key={post.id}
              featured={post.frontmatter.featured}
              image={post.frontmatter.images && post.frontmatter.images[0]}
              title={post.frontmatter.title}
              startdate={post.frontmatter.startdate}
              enddate={post.frontmatter.enddate}
              slug={post.fields.slug}
              description={post.frontmatter.description}
              body={post.excerpt}
            />
          ))}
      </div>
    );
  }
}

WorksList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query WorksListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___enddate] }
          filter: { frontmatter: { templateKey: { eq: "work-item" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                startdate(formatString: "MMMM YYYY")
                enddate(formatString: "MMMM YYYY")
                featured
                description
                images {
                  childImageSharp {
                    fluid(maxWidth: 240, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <WorksList data={data} />}
  />
);
