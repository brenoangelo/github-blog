import { FaArrowUpRightFromSquare, FaCalendarDay, FaChevronLeft, FaComment, FaGithub } from 'react-icons/fa6';
import { Card } from '../ui/Card';

import styles from './styles.module.css';

export function PostInfo() {
  return (
    <Card.Root>
      <div className={styles.postInfoContainer}>
        <Card.ContentHeader>
          <div className={styles.headerContainer}>
            <div className={styles.actionButtons}>
              <Card.ActionButton to="/"><FaChevronLeft /> Voltar</Card.ActionButton>
              <Card.ActionButton to="/">Ver no Github <FaArrowUpRightFromSquare /></Card.ActionButton>
            </div>
            <h2>JavaScript data types and data structures</h2>
          </div>
        </Card.ContentHeader>

        <footer className={styles.postFooter}>
          <Card.IconInfo><FaGithub /> Breno Angelo</Card.IconInfo>
          <Card.IconInfo><FaCalendarDay /> Há 1 dia</Card.IconInfo>
          <Card.IconInfo><FaComment /> 5 comentários</Card.IconInfo>
        </footer>
      </div>
    </Card.Root>
  );
}
