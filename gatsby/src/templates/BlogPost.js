import React from 'react';
import {graphql, Link} from 'gatsby';
import {renderRichText} from 'gatsby-source-contentful/rich-text';
import {AiOutlineLeft} from 'react-icons/ai';

import {ExternalLink} from '../components/ExternalLink/ExternalLink';
import {Layout} from '../components/Layout/Layout';

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

export const BlogPost = (props) => {
  const body = renderRichText(props.data.contentfulBlogPost.body);
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
          {body.map((reactElement, index) => {
            return (
              <reactElement.type key={`p${index}`}>
                {
                  reactElement.props.children.map((child) => {
                    if (child.type == 'a' && child.props.href.slice(0, 4) == 'http') {
                      return (
                        <ExternalLink to={child.props.href}>
                          {child.props.children[0]}
                        </ExternalLink>
                      );
                    } else {
                      return (<>{child}</>);
                    }
                  })
                }
              </reactElement.type>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
