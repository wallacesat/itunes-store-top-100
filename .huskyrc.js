const tasks = arr => arr.join(' && ');

module.exports = {
  hooks: {
    // 'pre-commit': tasks(['yarn test:e2e']),
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};
