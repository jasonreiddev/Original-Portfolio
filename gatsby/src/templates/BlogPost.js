import React from 'react';
import {graphql, Link} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image';
import {renderRichText} from 'gatsby-source-contentful/rich-text';
import {AiOutlineLeft} from 'react-icons/ai';

import Layout from '../components/Layout';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      featuredImage {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
      body {
        raw
      }
    }
  }
`;

export default function BlogPost(props) {
  return (
    <Layout title="Blog" subTitle={props.data.contentfulBlogPost.title}>
      <br/>
      <Link to="/blog/"><AiOutlineLeft/>Blog Page</Link>
      <div className="content">
        <h2>{props.data.contentfulBlogPost.title}</h2>
        <span className="meta">
          Posted on {props.data.contentfulBlogPost.publishedDate}
        </span>
        <hr/>
        {props.data.contentfulBlogPost.featuredImage && (
          <GatsbyImage
            className="featured"
            fluid={props.data.contentfulBlogPost.featuredImage.fluid}
            alt={props.data.contentfulBlogPost.title}
          />
        )}
        {renderRichText(props.data.contentfulBlogPost.body)}
      </div>
    </Layout>
  );
};
