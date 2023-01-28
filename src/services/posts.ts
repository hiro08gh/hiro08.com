import { MicroCMSListResponse,  } from 'microcms-js-sdk';
import { client } from '@/src/libs/client';
import { Post } from '@/src/types/post';

const endpoint = 'posts';

export const  getAllPosts = async () => {
  return client.get<MicroCMSListResponse<Post>>({
    endpoint,
    queries: { limit: 1000 },
  });
}

export const getLatestPosts = async () => {
  return client.get<MicroCMSListResponse<Post>>({
    endpoint,
    queries: { limit: 5 },
  });
}

export const getPosts = async (offset: number, limit: number) => {
  return client.get<MicroCMSListResponse<Post>>({
    endpoint,
    queries: { offset, limit },
  });
}

export const getPostDetail = async (id: string, draftKey?: string) => {
  return client.get<Post>({
    endpoint,
    contentId: id,
    queries: { draftKey: draftKey ?? '' },
  });
}
