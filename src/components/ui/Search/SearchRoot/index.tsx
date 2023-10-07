import styles from './styles.module.css';

export function SearchRoot({ children }: React.PropsWithChildren) {
  return <div className={styles.wrapper}>{children}</div>;
}
