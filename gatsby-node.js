/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
_.each(posts, (post, index) => {
  const previous = index === posts.length - 1 ? null : posts[index + 1].node;
  const next = index === 0 ? null : posts[index - 1].node;

  createPage({
    path: post.node.fields.slug,
    component: path.resolve('./src/templates/docs.js'),
    context: {
      slug: post.node.fields.slug,
      previous,
      next,
    },
  })

  createPage({
    path: `${post.node.fields.slug}/amp`,
    component: path.resolve('./src/templates/docs.amp.js'),
    context: {
      slug: post.node.fields.slug,
      previous,
      next,
    },
  })
})
