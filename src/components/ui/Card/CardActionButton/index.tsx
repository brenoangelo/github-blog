import styles from './styles.module.css';

interface CardActionButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {}

export function CardActionButton({
  children,
  ...props
}: React.PropsWithChildren<CardActionButtonProps>) {
  return (
    <button {...props} className={styles.actionButtonWrapper}>
      {children}
    </button>
  );
}
