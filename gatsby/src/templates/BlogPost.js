import React from 'react';
import {graphql, Link} from 'gatsby';
import {renderRichText} from 'gatsby-source-contentful/rich-text';
import {AiOutlineLeft} from 'react-icons/ai';
import externalLink from '../components/ExternalLink';

import Layout from '../components/Layout';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      body {
        raw
      }
    }
  }
`;

export default function BlogPost(props) {
  const body = renderRichText(props.data.contentfulBlogPost.body);
  body.forEach((reactElement) => {
    reactElement.props.children.forEach((child, index) => {
      if (child.type == 'a' && child.props.href.slice(0, 4) == 'http') {
        const ext = externalLink({to: child.props.href, children: child.props.children[0]});
        reactElement.props.children[index] =
          {...ext, key: `Child${index}ExternalLink`};
      }
    });
  });

  return (
    <Layout title="Blog" subTitle={props.data.contentfulBlogPost.title} content="article">
      <div>
        <br/>
        <Link to="/blog/1"><AiOutlineLeft/>Blog Page</Link>
        <div className="content">
          <h2>{props.data.contentfulBlogPost.title}</h2>
          <span className="meta">
          Posted on {props.data.contentfulBlogPost.publishedDate}
          </span>
          <hr/>
          {body}
        </div>
      </div>
    </Layout>
  );
};
