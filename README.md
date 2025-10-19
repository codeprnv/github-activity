
# Github-Activity

A simple command line interface (CLI) to fetch the recent activity of a GitHub user and display it in the terminal


## 🗒️ About

- This CLI tool allows you to quickly view recent activity of any public GitHub user. It fetches events via the GitHub API and displays a summary of what the user has been up to — such as commits pushed, repositories starred, etc.
- The aim is to provide a lightweight, easy-to-use way to inspect a user’s GitHub activity without needing to open the web interface.
- It is the solution to [Roadmap.sh](https://roadmap.sh/projects/github-user-activity) problem
## ✨ Features

- Accept a GitHub username
- Fetch recent user events from the GitHub API
- Summarise key actions:
    1. Number of commits per repository
    2. List of starred repositories
    3. Graceful error handling: invalid usernames, rate-limits
    4. Modular code-structure for scalability (services, ui, utils)

## 🔧 Getting Started

### Prerequisites
* Node.js v14+ (or a recent LTS)
* npm or yarn
* Internet connection

### Installation
Open your terminal, then:

```bash
git clone https://github.com/codeprnv/github-activity.git  
cd github-activity  
npm install  
```

### Usage
Run the following commands:

1. 
    ```bash 
    npm install
    ```
2. 
    ```bash
    npm run start
    ```

### Example Output

```
Enter your github username: kamranahmedse
Github Activity for kamranahmedse is: 

8 commit(s) pushed to kamranahmedse/developer-roadmap

⭐ Starred Repositories:
  - tvogels/slidekit
  - hundredrabbits/Dotgrid
  - ChromeDevTools/chrome-devtools-mcp
  - humblepenguinn/thmbly
  - humblepenguinn/mv
```
## 🧠 Working

1. The `utils/inputUtils.js` module handles user input (readline) and interface cleanup.

2. The `services/githubService.js` module handles API communication with GitHub, via axios.

3. The `services/analyzeEvents.js` module parses the JSON event stream and computes summary metrics (push counts, starred repos).

4. The `ui/displayEvents.js` module handles presentation (console output, colors via chalk).

5. The `src/index.js` file orchestrates the flow: get username → fetch events → analyze → display results → close interface.
## 📅 Future Enhancements

Here are some ideas for future improvements:

- Support CLI arguments directly (so you can run `github-activity <username>`).

- Support pagination for older/more events (GitHub returns only latest ~30 by default).

- Add support for other event types: IssueEvents, PullRequestEvents, ForkEvents, etc.

- Add caching or local storage to reduce API calls and handle rate-limits.

## Authors

- [@codeprnv](https://www.github.com/codeprnv)

