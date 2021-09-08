import {resolve} from 'path';
import pkgDir from 'pkg-dir';
const rootPath = pkgDir.sync(process.cwd());

const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);

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
            _updatedAt
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
        isCanonical: false,
      },
    });
  });
  data.projects.edges.forEach((edge) => {
    actions.createPage({
      path: `/projects/${edge.node.slug.current}`,
      component: resolve(rootPath, './src/templates/Project.js'),
      context: {
        slug: edge.node.slug.current,
        updated: edge.node.updatedAt,
      },
    });
  });
}

async function createEmploymentPages({graphql, actions}) {
  const {data} = await graphql(`
    query {
      employment: allSanityPosition(
        filter: {hideOnEmployment: {eq: false}}
      ) {
        totalCount
        edges {
          node {
            slug {
              current
            }
            _updatedAt
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
        isCanonical: false,
      },
    });
  });
  data.employment.edges.forEach((edge) => {
    actions.createPage({
      path: `/employment/${edge.node.slug.current}`,
      component: resolve(rootPath, './src/templates/Employment.js'),
      context: {
        slug: edge.node.slug.current,
        updated: edge.node._updatedAt,
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
            updatedAt
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
        isCanonical: false,
      },
    });
  });
  data.blogs.edges.forEach((edge) => {
    actions.createPage({
      path: `/blog/${edge.node.slug}`,
      component: resolve(rootPath, './src/templates/BlogPost.js'),
      context: {
        slug: edge.node.slug,
        updated: edge.node.updatedAt,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([
    createProjectPages(params),
    createEmploymentPages(params),
    createBlogPages(params),
  ]);
}
