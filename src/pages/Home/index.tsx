import { ArticlesGroup } from '../../components/ArticlesGroup';
import { CardInfo } from '../../components/CardInfo';
import { useGetIssues } from '../../components/hooks/useGetIssues';
import { Search } from '../../components/ui/Search';

import commonStyles from '../../styles/commonStyles.module.css';
import styles from './styles.module.css';

export function Home() {
  const { issues, isPending, handleChangeSearch } = useGetIssues();

  return (
    <main className={styles.homeContainer}>
      <div className={commonStyles.container}>
        <CardInfo />

        <Search.Root>
          <Search.Header>
            <h3>Publicações</h3>

            <p>{issues.total_count} publicações</p>
          </Search.Header>

          <Search.Input
            placeholder="Buscar conteúdo"
            onChange={({ target }) =>
              handleChangeSearch((target as HTMLInputElement).value)
            }
          />
        </Search.Root>

        <section className={styles.articlesSection}>
          <ArticlesGroup articles={issues.items} />
        </section>
      </div>
    </main>
  );
}
