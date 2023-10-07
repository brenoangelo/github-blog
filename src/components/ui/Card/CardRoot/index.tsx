import styles from './styles.module.css';

export function CardRoot({ children }: React.PropsWithChildren) {
  return <div className={styles.cardWrapper}>{children}</div>;
}
