import {resolve} from 'path';

const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;
  const response = await graphql(`
    query {
      allContentfulBlogPost {
        totalCount
        edges {
          node {
            slug
          }
        }
      }
      allSanityProject {
        totalCount
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      allSanityPosition {
        totalCount
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const blogPageCount = Math.ceil(response.data.allContentfulBlogPost.totalCount / pageSize);
  Array.from({length: blogPageCount}).forEach((_, i) => {
    createPage({
      path: `/blog/${i + 1}`,
      component: resolve('./src/pages/blog.js'),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
  const blogPostComponent=require.resolve('./src/templates/Blog-post.js');
  response.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: blogPostComponent,
      context: {
        slug: edge.node.slug,
      },
    });
  });

  const employmentPageCount = Math.ceil(response.data.allSanityPosition.totalCount / pageSize);
  Array.from({length: employmentPageCount}).forEach((_, i) => {
    createPage({
      path: `/employment/${i + 1}`,
      component: resolve('./src/pages/employment.js'),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
  const employmentComponent=require.resolve('./src/templates/Employment.js');
  response.data.allSanityPosition.edges.forEach((edge) => {
    createPage({
      path: `/employment/${edge.node.slug.current}`,
      component: employmentComponent,
      context: {
        slug: edge.node.slug.current,
      },
    });
  });

  const projectPageCount = Math.ceil(response.data.allSanityProject.totalCount / pageSize);
  Array.from({length: projectPageCount}).forEach((_, i) => {
    createPage({
      path: `/projects/${i + 1}`,
      component: resolve('./src/pages/projects.js'),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
  const projectComponent=require.resolve('./src/templates/Project.js');
  response.data.allSanityProject.edges.forEach((edge) => {
    createPage({
      path: `/projects/${edge.node.slug.current}`,
      component: projectComponent,
      context: {
        slug: edge.node.slug.current,
      },
    });
  });
};
