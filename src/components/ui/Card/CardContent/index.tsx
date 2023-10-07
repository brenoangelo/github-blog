import styles from './styles.module.css';

interface CardContentProps {
  text?: string;
}

export function CardContent({
  text,
  children,
}: React.PropsWithChildren<CardContentProps>) {
  return (
    <div className={styles.contentWrapper}>
      {children}
      <p>{text}</p>
    </div>
  );
}
