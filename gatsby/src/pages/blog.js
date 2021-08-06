import React from 'react';
import {useStaticQuery, graphql, Link} from 'gatsby';

import {GatsbyImage} from 'gatsby-plugin-image';
import Layout from '../components/layout';

const Blog = () => {
  const data = useStaticQuery(
      graphql`
      query {
        allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
          edges {
            node {
              title
              id
              slug
              publishedDate(formatString: "Do MMMM, YYYY")
              featuredImage {
                fluid(maxWidth: 750) {
                  ...GatsbyContentfulFluid
                }
              }
              excerpt {
                childMarkdownRemark {
                  excerpt(pruneLength: 150)
                }
              }
            }
          }
        }
      }
    `,
  );
  return (
    <Layout title="Blog">
      <ul className="posts" style={{margin: '0', padding: '0', listStyleType: 'none'}}>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              <div className="meta">
                <span>Posted on {edge.node.publishedDate}</span>
              </div>
              {edge.node.featuredImage && (
                <GatsbyImage
                  className="featured"
                  fluid={edge.node.featuredImage.fluid}
                  alt={edge.node.title}
                />
              )}
              <p className="excerpt">
                {edge.node.excerpt.childMarkdownRemark.excerpt}
              </p>
              <div className="button">
                <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default Blog;
