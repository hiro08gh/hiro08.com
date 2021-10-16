const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allMicrocmsArticle(sort: { fields: [publishedAt], order: DESC }, limit: 1000) {
          edges {
            node {
              id
              articleId
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const pageTemplate = path.resolve('./src/template/article-page.tsx');
  const articles = result.data.allMicrocmsArticle.edges;
  const PerPage = 10;
  const pageCount = Math.ceil(articles.length / PerPage);

  for (let i = 0; i < pageCount; i++) {
    createPage({
      path: i === 0 ? '/article/page/1' : `/article/page/${i + 1}`,
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
