import axios from "axios";
import { GitHubUser, GitHubRepository } from "@/types/github";

const GITHUB_API_URL = "https://api.github.com";
const GITHUB_USER_ENDPOINT = `${GITHUB_API_URL}/user`;
const GITHUB_HEADERS = {
    "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`,
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
};

const getGitHubUser = async (): Promise<GitHubUser | null> => {
    try {
        const { data } = await axios.get<GitHubUser>(`${GITHUB_USER_ENDPOINT}`, {
            headers: GITHUB_HEADERS,
        });
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
    } catch (error) {
        console.error("Failed to fetch GitHub user:", error);
        return null;
    }
};

const getGitHubRepositories = async (username: string): Promise<GitHubRepository[]> => {
    try {
        const { data } = await axios.get<GitHubRepository[]>(`${GITHUB_API_URL}/users/${username}/repos`, {
            headers: GITHUB_HEADERS,
        });
        
        const repos = await Promise.all(
            data.map(async (repo) => {
                try {
                    const { data: languages } = await axios.get<{ [key: string]: number }>(
                        `${GITHUB_API_URL}/repos/${username}/${repo.name}/languages`,
                        {
                            headers: GITHUB_HEADERS,
                        }
                    );
                    return { ...repo, languages };
                } catch (err) {
                    console.error(`Failed to fetch languages for repo ${repo.name}:`, err);
                    return { ...repo, languages: {} };
                }
            })
        );
        const reposWithLanguages: GitHubRepository[] = repos.map((repo) => ({
            id: repo.id,
            name: repo.name
                .replace(/-/g, ' ')
                .replace(/^\w/, c => c.toUpperCase())
                .replace(/(?<=^\w).*/, c => c.toLowerCase()),
            url: repo.url,
            homepage: repo.homepage,
            html_url: repo.html_url,
            description: repo.description,
            languages_url: repo.languages_url,
            languages: Object.keys(repo.languages || {}).map(lang =>
            lang.charAt(0).toUpperCase() + lang.slice(1).toLowerCase()
            ),
        }));
        
        return reposWithLanguages;
    } catch (error) {
        console.error("Failed to fetch GitHub repositories:", error);
        return [];
    }
};

const githubService = {
    getGitHubUser,
    getGitHubRepositories,
};

export default githubService;