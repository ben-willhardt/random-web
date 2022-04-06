import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/Benne2000/random-web.git', // Update to point to your repository
  user: {
   name: 'Benedict Willhardt', // update to use your name
   email: 'bennewill@web.de' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);