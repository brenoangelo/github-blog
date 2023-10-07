import styles from './styles.module.css';

export function CardGroupContent({ children }: React.PropsWithChildren) {
  return <section className={styles.groupContentWrapper}>{children}</section>;
}
