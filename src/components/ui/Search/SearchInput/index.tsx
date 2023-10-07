import styles from './styles.module.css';

interface SearchInputProps extends React.AllHTMLAttributes<HTMLInputElement> {}

export function SearchInput({ ...props }: SearchInputProps) {
  return <input className={styles.searchWrapper} type="search" {...props} />;
}
