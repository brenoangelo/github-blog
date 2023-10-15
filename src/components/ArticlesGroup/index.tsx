import Markdown from 'react-markdown';
import { RepositoryIssueItem } from '../../services/github';
import { Article } from '../ui/Article';

import styles from './styles.module.css';

const REMOVE_ELEMENTS = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'strong',
  'em',
  'i',
  'img',
  'hr',
];

interface ArticlesGroupProps {
  articles?: RepositoryIssueItem[];
}

export function ArticlesGroup({ articles }: ArticlesGroupProps) {
  return (
    <div className={styles.articlesWrapper}>
      {articles?.map((article) => (
        <Article.Root key={article.id} to={`/post/${article.id}`}>
          <Article.Title>
            <h3>{article.title}</h3>

            <small>Há 1 dia</small>
          </Article.Title>

          <Article.Content>
            <Markdown disallowedElements={REMOVE_ELEMENTS}>
              {article.body}
            </Markdown>
          </Article.Content>
        </Article.Root>
      ))}
    </div>
  );
}
