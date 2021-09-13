import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import Posts from '../components/Posts';

export default function Blog({data, pageContext}) {
  const blogPosts = data.blogPosts.edges;

  blogPosts.forEach((blogPost) => {
    blogPost.id = blogPost.node.id;
    blogPost.h2InsteadOfh3 = true;
    blogPost.title = blogPost.node.title;
    blogPost.linkUrl = `/blog/${blogPost.node.slug}`;
    blogPost.meta = `Posted on ${blogPost.node.publishedDate}`;
    blogPost.node.excerpt.childMarkdownRemark.excerpt.slice(-1) != '…' ?
    blogPost.excerpt = blogPost.node.excerpt.childMarkdownRemark.excerpt +'...' :
    blogPost.excerpt = blogPost.node.excerpt.childMarkdownRemark.excerpt;
  });

  return (
    <Layout title="Blog">
      <Posts posts={blogPosts}/>
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
