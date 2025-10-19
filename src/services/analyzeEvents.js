// src\services\analyzeEvents.js
function analyzeEvents(events) {
    const pushEvents = {};
    const starredRepos = []

    for (const event of events) {
        const repoName = event.repo?.name;
        if (!repoName) continue;
        
        switch (event.type) {
            case 'PushEvent':
                pushEvents[repoName] = (pushEvents[repoName] || 0) + 1;
                break;
            case 'WatchEvent':
                starredRepos.push(repoName);
                break;
            default:
                break;
        }
    }
    return { pushEvents, starredRepos };
}

export default analyzeEvents