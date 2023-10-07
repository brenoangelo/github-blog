import styles from './styles.module.css'
export function ArticleTitle({ children }: React.PropsWithChildren) {
  return <div className={styles.titleWarpper}>{children}</div>;
}
