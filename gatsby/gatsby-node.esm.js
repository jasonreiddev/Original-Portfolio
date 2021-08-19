import {resolve} from 'path';
import pkgDir from 'pkg-dir';
const rootPath = pkgDir.sync(process.cwd());

const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);

async function createEmploymentPages({graphql, actions}) {
  const {data} = await graphql(`
    query {
      employment: allSanityPosition {
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
  const employmentPageCount = Math.ceil(data.employment.totalCount / pageSize);
  Array.from({length: employmentPageCount}).forEach((_, i) => {
    actions.createPage({
      path: `/employment/${i + 1}`,
      component: resolve(rootPath, './src/pages/employment.js'),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
  data.employment.edges.forEach((edge) => {
    actions.createPage({
      path: `/employment/${edge.node.slug.current}`,
      component: resolve(rootPath, './src/templates/Employment.js'),
      context: {
        slug: edge.node.slug.current,
      },
    });
  });
}

async function createBlogPages({graphql, actions}) {
  const {data} = await graphql(`
    query {
      blogs: allContentfulBlogPost {
        totalCount
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  const blogPageCount = Math.ceil(data.blogs.totalCount / pageSize);
  Array.from({length: blogPageCount}).forEach((_, i) => {
    actions.createPage({
      path: `/blog/${i + 1}`,
      component: resolve(rootPath, './src/pages/blog.js'),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
  data.blogs.edges.forEach((edge) => {
    actions.createPage({
      path: `/blog/${edge.node.slug}`,
      component: resolve(rootPath, './src/templates/BlogPost.js'),
      context: {
        slug: edge.node.slug,
      },
    });
  });
}

async function createProjectPages({graphql, actions}) {
  const {data} = await graphql(`
    query {
      projects: allSanityProject {
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
  const projectPageCount = Math.ceil(data.projects.totalCount / pageSize);
  Array.from({length: projectPageCount}).forEach((_, i) => {
    actions.createPage({
      path: `/projects/${i + 1}`,
      component: resolve(rootPath, './src/pages/projects.js'),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
  data.projects.edges.forEach((edge) => {
    actions.createPage({
      path: `/projects/${edge.node.slug.current}`,
      component: resolve(rootPath, './src/templates/Project.js'),
      context: {
        slug: edge.node.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([
    createProjectPages(params),
    createBlogPages(params),
    createEmploymentPages(params),
  ]);
}
