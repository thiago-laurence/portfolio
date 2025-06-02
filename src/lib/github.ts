import axios from "axios";
import { GitHubUser } from "@/types/github";

const GITHUB_API_URL = "https://api.github.com";
const GITHUB_USER_ENDPOINT = `${GITHUB_API_URL}/user`;

const getGitHubUser = async (): Promise<GitHubUser | null> => {
    try {
        const { data } = await axios.get<GitHubUser>(`${GITHUB_USER_ENDPOINT}`, {
            headers: {
                "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`,
                "Accept": "application/vnd.github+json",
                "X-GitHub-Api-Version": "2022-11-28",
            },
        });

        return data;
    } catch (error) {
        console.error("Failed to fetch GitHub user:", error);
        return null;
    }
};

const githubService = {
    getGitHubUser,
};

export default githubService;