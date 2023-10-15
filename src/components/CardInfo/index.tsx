import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import { Card } from '../ui/Card';

import styles from './styles.module.css';
import { useGetUser } from '../hooks/useGetUser';

export function CardInfo() {
  const { user } = useGetUser();

  return (
    <Card.Root>
      <Card.Image src={user.avatar_url} alt={user.name} />
      <Card.GroupContent>
        <Card.Content text={user.bio}>
          <Card.ContentHeader>
            <h1>{user.name}</h1>
            <Card.ActionButton to={user.html_url} target="_blank">
              ver no github
              <FaArrowUpRightFromSquare />
            </Card.ActionButton>
          </Card.ContentHeader>
        </Card.Content>

        <footer className={styles.cardFooter}>
          <Card.IconInfo>
            <FaGithub />
            <span>{user.login}</span>
          </Card.IconInfo>

          <Card.IconInfo>
            <FaGithub />
            <span>{user.company}</span>
          </Card.IconInfo>

          <Card.IconInfo>
            <FaGithub />
            <span>{user.followers} seguidores</span>
          </Card.IconInfo>
        </footer>
      </Card.GroupContent>
    </Card.Root>
  );
}
