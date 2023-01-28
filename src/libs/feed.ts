import RSS from 'rss';
import { PostType } from '@/src/types/post';
import { meta } from '@/src/libs/meta';

export const generateFeedXml = (posts: PostType[]) => {
  const feed = new RSS({
    title: meta.title,
    description: meta.description,
    site_url: meta.site_url,
    feed_url: `${meta.site_url}/feed`,
    language: 'ja',
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      date: new Date(post.createdAt),
      url: `${meta.site_url}/posts/${post.id}`,
    });
  });

  return feed.xml();
};