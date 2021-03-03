module.exports = {
  apps: [
    {
      script: 'tsc & node dist/server.js',
      watch: '.',
      instances: '1',
      // exec_mode: 'cluster',
      node_args: '--max_old_space_size=8192',
    },
  ],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
};
