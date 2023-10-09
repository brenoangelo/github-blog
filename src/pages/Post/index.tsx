import { PostInfo } from '../../components/PostInfo';

import commonStyles from '../../styles/commonStyles.module.css';

export function Post() {
  return (
    <main>
      <div className={commonStyles.container}>
        <PostInfo />
      </div>
    </main>
  );
}
