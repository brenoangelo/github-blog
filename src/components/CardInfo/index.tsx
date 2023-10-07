import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import { Card } from '../ui/Card';

import styles from './styles.module.css';

export function CardInfo() {
  return (
    <Card.Root>
      <Card.Image src="https://i.pravatar.cc/150?img=11" alt="breno angelo" />
      <Card.GroupContent>
        <Card.Content text="Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.">
          <Card.ContentHeader>
            <h1>Breno Angelo</h1>
            <Card.ActionButton>
              ver no github
              <FaArrowUpRightFromSquare />
            </Card.ActionButton>
          </Card.ContentHeader>
        </Card.Content>

        <footer className={styles.cardFooter}>
          <Card.IconInfo>
            <FaGithub />
            <span>Breno Angelo</span>
          </Card.IconInfo>

          <Card.IconInfo>
            <FaGithub />
            <span>Sensedata</span>
          </Card.IconInfo>

          <Card.IconInfo>
            <FaGithub />
            <span>35 seguidores</span>
          </Card.IconInfo>
        </footer>
      </Card.GroupContent>
    </Card.Root>
  );
}
