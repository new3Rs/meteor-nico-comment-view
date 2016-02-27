Package.describe({
  name: 'new3rs:nico-comment-view',
  summary: 'Nico-nico like comment view',
  version: '1.0.1',
  git: 'https://github.com/new3Rs/meteor-nico-comment-view.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('jquery', 'client');
  api.addFiles('nico-comment-view.js', 'client');
  api.addFiles('nico-comment-view.css', 'client');
});
