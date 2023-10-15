import { useEffect, useState } from 'react';
import { GithubUserResponse, getGithubUser } from '../../services/github';

export function useGetUser() {
  const [user, setUser] = useState<GithubUserResponse>(
    {} as GithubUserResponse,
  );

  useEffect(() => {
    setGithubUser();
  }, []);

  async function setGithubUser() {
    const data = await getGithubUser();

    if (!data) {
      return;
    }

    setUser({
      avatar_url: data.avatar_url,
      bio: data.bio,
      company: data.company,
      followers: data.followers,
      name: data.name,
      login: data.login,
      html_url: data.html_url,
    });
  }

  return {
    user,
  };
}
