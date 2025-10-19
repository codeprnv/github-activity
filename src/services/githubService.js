// src\services\githubService.js
import axios from 'axios';

async function fetchUserEvents(username) {
  const GITHUB_API_BASE = `https://api.github.com/users`;
  try {
      const response = await axios.get(`${GITHUB_API_BASE}/${username}/events`);
    return response.data || [];
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('User does not exist on github!');
    } else if (error.response?.status === 403) {
      throw new Error('Rate limit exceeded! Try again later');
    } else {
      throw new Error('Failed to fetch data from github!');
    }
  }
}

export default fetchUserEvents;
