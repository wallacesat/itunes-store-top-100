const tasks = (arr) => arr.join(' && ');

module.exports = {
  header: 'iTunes Store Top 100 - Changelog',
  types: [
    { type: '🚀 feat', section: 'Features' },
    { type: '🛠 fix', section: 'Bug Fixes' },
    { type: '🤖 chore', section: 'Chores' },
    { type: '📝 docs', section: 'Docs' },
    { type: '💅 style', hidden: true },
    { type: '🧩 refactor', section: 'Refactor' },
    { type: '⚙️ perf', hidden: true },
    { type: '🧪 test', section: 'Tests' },
  ],
};
