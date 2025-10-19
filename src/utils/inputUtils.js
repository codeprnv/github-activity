// src\utils\inputUtils.js
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Create a new wrapper function to ask questions using async/await
function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

export function closeInterface() {
  return rl.close();
}

export default ask;
