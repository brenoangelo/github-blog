import { useCallback, useEffect, useState, useTransition } from 'react';
import {
  RepositoryIssuesResponse,
  getRepositoryIssues,
} from '../../services/github';

export function useGetIssues() {
  const [isPending, startTransition] = useTransition();

  const [issues, setIssues] = useState<RepositoryIssuesResponse>(
    {} as RepositoryIssuesResponse,
  );
  const [search, setSearch] = useState('');

  const setRepositoryIssues = useCallback(async () => {
    const data = await getRepositoryIssues(search);

    if (!data) {
      return;
    }

    setIssues(data);
  }, [search]);

  useEffect(() => {
    setRepositoryIssues();
  }, [search, setRepositoryIssues]);

  function handleChangeSearch(query: string) {
    startTransition(() => {
      setSearch(query);
    });
  }

  return {
    handleChangeSearch,
    issues,
    isPending,
  };
}
