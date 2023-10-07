import styles from './styles.module.css';

export function CardContentHeader({ children }: React.PropsWithChildren) {
  return <header className={styles.contentHeaderWrapper}>{children}</header>;
}
