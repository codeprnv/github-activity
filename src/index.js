// src\index.js
import analyzeEvents from './services/analyzeEvents.js';
import fetchUserEvents from './services/githubService.js';
import displayEvents from './ui/displayEvents.js';
import ask, { closeInterface } from './utils/inputUtils.js';

async function main() {
  try {
    const username = (await ask('Enter your github username: ')).trim();

    if (!username) {
      console.error('Username cannot be empty!');
      return;
    }

    const events = await fetchUserEvents(username);
    const analysis = analyzeEvents(events);

    displayEvents(username, analysis);
  } catch (error) {
    console.error(`Error: `, error.message);
  } finally {
    closeInterface();
  }
}

main()