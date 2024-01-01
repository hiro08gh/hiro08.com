import Link from 'next/link';
import { parseDate } from '@/src/libs/contents';
import { Post } from '@/src/types/post';

import styles from './postCard.module.scss';

type Props = {
  post: Post;
};

export const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <article className={styles.article}>
      <time className={styles.time}>
        {parseDate(post.updatedAt || post.createdAt)}
      </time>
      <Link href={`/posts/${post.id}`}>{post.title}</Link>
    </article>
  );
};
