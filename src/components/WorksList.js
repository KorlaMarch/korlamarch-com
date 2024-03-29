import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import WorkCard from "./WorkCard";
import moment from "moment";

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
              enddate={post.frontmatter.enddate ? moment(post.frontmatter.enddate).format("MMMM YYYY") : ""}
              slug={post.fields.slug}
              description={post.frontmatter.description}
              body={post.excerpt}
              tags={post.frontmatter.tags}
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

const WorkListQuery = () => (
  <StaticQuery
    query={graphql`
      query WorksListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___startdate] }
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
                enddate
                featured
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
        }
      }
    `}
    render={(data, count) => <WorksList data={data} />}
  />
);

export default WorkListQuery;