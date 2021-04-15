import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

export const WorkCard = ({
  key,
  featured,
  image,
  title,
  startdate,
  enddate,
  slug,
  description,
  tags,
  body
}) => {
  return (
    <div className="is-parent column is-6" key={key}>
      <article
        className={`blog-list-item tile is-child box notification ${
          featured ? "is-featured" : ""
        }`}
      >
        <header>
          {image ? (
            <div className="featured-thumbnail">
              <PreviewCompatibleImage
                imageInfo={{
                  image: image,
                  alt: `featured image thumbnail for post ${title}`
                }}
              />
            </div>
          ) : null}
          <div>
            <Link
              className="title has-text-primary is-size-4 is-block"
              to={slug}
            >
              {title}
            </Link>
            <p className="subtitle is-size-6 is-block mb-2">
              {startdate !== enddate ? startdate + " - " : null}
              {enddate ? enddate : "Present"}
            </p>
            <p className="subtitle is-size-5">{description}</p>
          </div>
        </header>
        <p>
          {body}
          <br />
          <br />
        </p>
        <div class="is-block">
          {
            tags && tags.map((x) => (
              <span class="tag is-success mr-1">{x}</span>
            ))
          }  
        </div>
      </article>
    </div>
  );
};

WorkCard.propTypes = {
  work: PropTypes.node.isRequired
};

export default WorkCard;
