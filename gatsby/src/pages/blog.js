import React from 'react';
import {graphql, Link} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';

export default function Blog({data, pageContext}) {
  const blogPosts = data.blogPosts.edges;

  return (
    <Layout title="Blog">
      <ul className="posts" style={{margin: '0', padding: '0', listStyleType: 'none'}}>
        {blogPosts.map((edge) => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              {edge.node.featuredImage && (
                <GatsbyImage
                  className="featured"
                  fluid={edge.node.featuredImage.fluid}
                  alt={edge.node.title}
                />
              )}
              <p className="meta">
                <span>Posted on {edge.node.publishedDate}</span>
              </p>
              <p>
                <Link to={`/blog/${edge.node.slug}/`}>
                  <span className="excerpt">{edge.node.excerpt.childMarkdownRemark.excerpt}</span>...
                </Link>
              </p>
            </li>
          );
        })}
      </ul>
      <Pagination
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        totalCount={data.blogPosts.totalCount}
        currentPage={pageContext.currentPage || 'All'}
        skip={pageContext.skip}
        base="/blog"
      />
    </Layout>
  );
};

export const query = graphql`
  query($skip: Int = 0, $pageSize: Int = 99999) {
    blogPosts: allContentfulBlogPost(
      limit: $pageSize, skip: $skip,
      sort: { fields: publishedDate, order: DESC }
      ) {
        edges {
          node {
            title
            id
            slug
            publishedDate(formatString: "YYYY-MM-DD")
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
`;
