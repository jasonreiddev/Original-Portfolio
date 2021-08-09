const path = require('path');

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;
  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
      allSanityProject {
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
  response.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: path.resolve('./src/templates/Blog-post.js'),
      context: {
        slug: edge.node.slug,
      },
    });
  });
  response.data.allSanityProject.edges.forEach((edge) => {
    createPage({
      path: `/projects/${edge.node.slug.current}`,
      component: path.resolve('./src/templates/Project.js'),
      context: {
        slug: edge.node.slug.current,
      },
    });
  });
};
