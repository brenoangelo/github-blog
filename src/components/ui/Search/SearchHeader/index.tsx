import styles from './styles.module.css';

export function SearchHeader({ children }: React.PropsWithChildren) {
  return <div className={styles.headerWrapper}>{children}</div>;
}
