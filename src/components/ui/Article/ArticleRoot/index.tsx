import { Link } from 'react-router-dom';
import styles from './styles.module.css';

interface ArticleRootProps {
  to: string;
}

export function ArticleRoot({
  to,
  children,
}: React.PropsWithChildren<ArticleRootProps>) {
  return (
    <Link to={to} className={styles.articleWrapper}>
      {children}
    </Link>
  );
}
