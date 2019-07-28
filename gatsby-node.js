const path = require(`path`);

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: `/product/:productId`,
    matchPath: `/product/:productId`,
    component: path.resolve(`src/dynamic-pages/product.js`),
    context: {},
  });
};
