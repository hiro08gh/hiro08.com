import { PostList } from '@/src/components/ui/PostList';
import { Post } from '@/src/types/post';

import styles from './homeView.module.scss';

type Props = {
  posts: Post[];
};

export const HomeView: React.FC<Props> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.head}>Articles</h2>
        <PostList posts={posts} />
      </section>
    </div>
  );
};
