import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'Benne2000',
  repo: 'https://github.com/JARVIS-source/random-web.git', // Update to point to your repository
  user: {
   name: 'Benedict Willhardt', // update to use your name
   email: 'benedict@willhardt.dev' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);