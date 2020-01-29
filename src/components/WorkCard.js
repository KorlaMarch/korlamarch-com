import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

export const WorkCard = ({
  key,
  featured,
  image,
  title,
  date,
  slug,
  description
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
          <p className="post-meta">
            <Link className="title has-text-primary is-size-4" to={slug}>
              {title}
            </Link>
            <span> &bull; </span>
            <span className="subtitle is-size-5 is-block">{date}</span>
          </p>
        </header>
        <p>
          {description}
          <br />
          <br />
        </p>
      </article>
    </div>
  );
};

WorkCard.propTypes = {
  work: PropTypes.node.isRequired
};

export default WorkCard;
