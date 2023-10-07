import { ArticlesGroup } from '../../components/ArticlesGroup';
import { CardInfo } from '../../components/CardInfo';
import { Article } from '../../components/ui/Article';
import { Search } from '../../components/ui/Search';

import commonStyles from '../../styles/commonStyles.module.css';
import styles from './styles.module.css';

export function Home() {
  return (
    <main className={styles.homeContainer}>
      <div className={commonStyles.container}>
        <CardInfo />

        <Search.Root>
          <Search.Header>
            <h3>Publicações</h3>

            <p>6 publicações</p>
          </Search.Header>

          <Search.Input placeholder="Buscar conteúdo" />
        </Search.Root>

        <section>
          <ArticlesGroup />
        </section>
      </div>
    </main>
  );
}
