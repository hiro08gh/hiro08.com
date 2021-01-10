const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allMicrocmsBlog(sort: { fields: [publishedAt], order: DESC }, limit: 1000) {
          edges {
            node {
              id
              blogId
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const pageTemplate = path.resolve('./src/pages/blog/page/index.tsx');
  const blogs = result.data.allMicrocmsBlog.edges;
  const PerPage = 10;
  const pageCount = Math.ceil(blogs.length / PerPage);

  for (let i = 0; i < pageCount; i++) {
    createPage({
      path: i === 0 ? '/blog/page/1' : `/blog/page/${i + 1}`,
      component: pageTemplate,
      context: {
        limit: PerPage,
        skip: i * PerPage,
        pageCount,
        currentPage: i + 1
      }
    });
  }
};
