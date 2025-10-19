// src\ui\displayEvents.js
import chalk from 'chalk';

function displayEvents(username, {pushEvents, starredRepos}) {
    console.log(chalk.cyanBright(`Github Activity for ${username} is: \n`))

    if (Object.keys(pushEvents).length === 0 && starredRepos.length === 0) {
        console.log(chalk.gray('No recent push and star events found!'))
        return;
    }

    for (const [repo, count] of Object.entries(pushEvents)) {
        console.log(chalk.green(`${count} commit(s) pushed to ${repo}`));
      }
    
      if (starredRepos.length > 0) {
        console.log(chalk.yellow('\n⭐ Starred Repositories:'));
        starredRepos.forEach((repo) => console.log(`  - ${repo}`));
      }
    
      console.log('\n');
    
}

export default displayEvents;