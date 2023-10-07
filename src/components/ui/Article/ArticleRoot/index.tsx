import styles from './styles.module.css'

export function ArticleRoot({ children }: React.PropsWithChildren) {
  return (
    <article className={styles.articleWrapper}>{children}</article>
  )
}