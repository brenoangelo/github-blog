import { api } from './api';

const USER_NAME = 'brenoangelo';
const REPOSITORY = 'github-blog';

export interface GithubUserResponse {
  avatar_url: string;
  bio: string;
  company: string;
  followers: string;
  name: string;
  login: string;
  html_url: string;
}

export async function getGithubUser() {
  try {
    const { data } = await api.get<GithubUserResponse>(`/users/${USER_NAME}`);

    return data;
  } catch (error) {
    console.error(error);
  }
}

export interface RepositoryIssueItem {
  body: string;
  comments: number;
  title: string;
  updated_at: string;
  id: number;
}

export interface RepositoryIssuesResponse {
  items: RepositoryIssueItem[];
  total_count: 2;
}

export async function getRepositoryIssues(searchQuery = '') {
  try {
    const { data } = await api.get<RepositoryIssuesResponse>(
      `/search/issues?q=${searchQuery}%20repo:${USER_NAME}/${REPOSITORY}`,
    );

    return data;
  } catch (error) {
    console.error(error);
  }
}
