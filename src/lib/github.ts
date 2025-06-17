import { GitHubUser, GitHubRepository, GitHubRepositories } from "@/types/github";

const GITHUB_API_URL = "https://api.github.com";
const GITHUB_USER_ENDPOINT = `${GITHUB_API_URL}/user`;
const GITHUB_HEADERS = {
    "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`,
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
};
const MAX_REPOS = 15;
const GITHUB_REPOS_ENDPOINT = `${GITHUB_API_URL}/users/{username}/repos?per_page=${MAX_REPOS}&page={page}`;
const PREV_PATTERN = /(?<=<)([\S]*)(?=>; rel="Prev")/i;
const NEXT_PATTERN = /(?<=<)([\S]*)(?=>; rel="Next")/i;

const formatRepoName = (name: string) =>
  name.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase());

const getGitHubUser = async (): Promise<GitHubUser | null> => {
    const response = await fetch(`${GITHUB_USER_ENDPOINT}`, {
        next: { revalidate: 3600 },
        headers: GITHUB_HEADERS,
    });
    if (!response.ok) {
        console.error("Failed to fetch GitHub user:", response.statusText);
        return null;
    }

    const data = await response.json();
    const user: GitHubUser = {
        id: data.id,
        login: data.login,
        name: data.name,
        avatar_url: data.avatar_url,
        html_url: data.html_url,
        bio: data.bio,
        location: data.location,
    };

    return user;
};

const getGitHubRepositories = async (username: string, page: number = 1): Promise<GitHubRepositories> => {
    const response = await fetch(`${GITHUB_REPOS_ENDPOINT.replace("{username}", username).replace("{page}", page.toString())}`, {
        next: { revalidate: 3600 },
        headers: GITHUB_HEADERS,
    });
    if (!response.ok) {
        console.error("Failed to fetch GitHub repositories:", response.statusText);
        return { repositories: [], nextPage: null, prevPage: null, currentPage: page  };
    }

    const data = await response.json();
    const repos: GitHubRepository[] = data.map((repo: GitHubRepository) => ({
        id: repo.id,
        name: repo.name,
        url: repo.url,
        homepage: repo.homepage,
        html_url: repo.html_url,
        description: repo.description,
        languages_url: repo.languages_url,
        languages: [],
    }));

    const reposWithLanguages: GitHubRepository[] = await Promise.all(
        repos.map(async (repo) => {
            const response = await fetch(`${GITHUB_API_URL}/repos/${username}/${repo.name}/languages`, {
                headers: GITHUB_HEADERS,
            });
            if (!response.ok) {
                console.error(`Failed to fetch languages for repo ${repo.name}:`, response.statusText);
                return { ...repo, languages: [] };
            }
                
            const languagesData = await response.json();
            const languages = Object.keys(languagesData).map((lang) => lang.toUpperCase());

            return { ...repo, name: formatRepoName(repo.name), languages };
        })
    );

    
    const linkHeader = response.headers.get('link');
    const nextPage = linkHeader && linkHeader.includes(`rel=\"next\"`);
    const prevPage = linkHeader && linkHeader.includes(`rel=\"prev\"`);
    let nextUrl = '', prevUrl = '';
    if (nextPage) {
      const match = linkHeader.match(NEXT_PATTERN);
      nextUrl = match ? match[0] : '';
    }

    if (prevPage) {
      const match = linkHeader.match(PREV_PATTERN);
      prevUrl = match ? match[0] : '';
    }

    return {
        repositories: reposWithLanguages,
        currentPage: page,
        nextPage: nextUrl,
        prevPage: prevUrl,
    };
};

const githubService = {
    getGitHubUser,
    getGitHubRepositories,
};

export default githubService;