import styles from './styles.module.css';

export function ArticleContent({ children }: React.PropsWithChildren) {
  return <p className={styles.articleContentContainer}>{children}</p>;
}
