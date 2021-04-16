import React from "react";
import Layout from "../components/Layout";

const BlogPage = () => (
    <Layout isNav pageTitle="Blogs">
        <div className="container">
        <div className="columns">
            <div className="column is-10 is-offset-1 mt-6">
            <p className="is-size-4">
                Nothing here yet. Curious? Come back in May! (I promise I won't forget about this...) 
            </p>
            <img className="my-2" src="img/construct.gif" />
            <p className="is-size-4">
                ^^ Me hard at work
            </p>
            </div>
        </div>
        </div>
    </Layout>
);

export default BlogPage;
