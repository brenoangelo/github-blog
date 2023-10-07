import styles from './styles.module.css';

export function CardIconInfo({ children }: React.PropsWithChildren) {
  return <div className={styles.iconInfoContainer}>{children}</div>;
}
