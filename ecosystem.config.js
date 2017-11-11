module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-195-92-138.eu-central-1.compute.amazonaws.com',
      key: '/Users/axellavergne/Desktop/jbg_aws_1.pem',
      ref: 'origin/master',
      repo: 'git@github.com:J-B-G/tutorial-2.git',
      path: '/home/ubuntu/tutorial-2',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}