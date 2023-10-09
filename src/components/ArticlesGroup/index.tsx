import { Article } from '../ui/Article';

import styles from './styles.module.css'

const ARTICLES = [
  { title: 'lorem', content: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in data structures available in' },
  { title: 'lorem', content: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in data structures available in' },
  { title: 'lorem', content: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in data structures available in' },
  { title: 'lorem', content: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in data structures available in' },
  { title: 'lorem', content: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in data structures available in' },
  { title: 'lorem', content: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in data structures available in' },
  { title: 'lorem', content: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in data structures available in' },
  { title: 'lorem', content: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in data structures available in' },
  { title: 'lorem', content: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in data structures available in' },
];

export function ArticlesGroup() {
  return (
    <div className={styles.articlesWrapper}>
      {ARTICLES.map(({ title, content }) => (
        <Article.Root to="/post/1">
          <Article.Title>
            <h3>{title}</h3>

            <small>Há 1 dia</small>
          </Article.Title>

          <Article.Content>
            <p>{content}</p>
          </Article.Content>
        </Article.Root>
      ))}
    </div>
  );
}
