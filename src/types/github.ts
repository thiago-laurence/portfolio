export interface GitHubUser {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  location: string;
}

export interface GitHubRepository {
  id: number;
  name: string;
  homepage: string | null;
  url: string;
  html_url: string;
  description: string | null;
  languages_url: string;
  languages: string[];
}

export enum GitHubLanguage {
  JAVASCRIPT = "javascript",
  TYPESCRIPT = "typescript",
  PYTHON = "python",
  JAVA = "java",
  CSHARP = "csharp",
  PHP = "php",
  HTML = "html5",
  CSS = "css3",
  SHELL = "powershell",
  DOCKERFILE = "docker",
  VUE = "vuejs",
  REACT = "react",
  SCSS = "sass",
}