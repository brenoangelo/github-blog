

import styles from './styles.module.css';

interface CardImageProps extends React.AllHTMLAttributes<HTMLImageElement> {}

export function CardImage({ ...props }: CardImageProps) {
  return <img className={styles.image} {...props} />;
}
