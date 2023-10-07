import { Article } from '../ui/Article';

const ARTICLES = [
  { title: 'lorem', content: 'loreeee' },
  { title: 'lorem', content: 'loreeee' },
  { title: 'lorem', content: 'loreeee' },
  { title: 'lorem', content: 'loreeee' },
  { title: 'lorem', content: 'loreeee' },
  { title: 'lorem', content: 'loreeee' },
  { title: 'lorem', content: 'loreeee' },
  { title: 'lorem', content: 'loreeee' },
  { title: 'lorem', content: 'loreeee' },
];

export function ArticlesGroup() {
  return (
    <div>
      {ARTICLES.map(({ title, content }) => (
        <Article.Root>
          <Article.Title>
            <h3>{title}</h3>

            <span>Há 1 dia</span>
          </Article.Title>

          <Article.Content>
            <p>{content}</p>
          </Article.Content>
        </Article.Root>
      ))}
    </div>
  );
}
