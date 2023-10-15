import { Link, LinkProps } from 'react-router-dom';
import styles from './styles.module.css';

interface CardActionButtonProps extends LinkProps {}

export function CardActionButton({
  children,
  ...props
}: React.PropsWithChildren<CardActionButtonProps>) {
  return (
    <Link {...props} className={styles.actionButtonWrapper}>
      {children}
    </Link>
  );
}
