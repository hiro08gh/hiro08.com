import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import { HomeView } from '@/src/components/views/HomeView';
import { MetaContainer } from '@/src/components/ui/MetaContainer';
import { Layout } from '@/src/components/ui/Layout';
import { Post } from '@/src/types/post';
import { getLatestPosts } from '@/src/services/posts';

type Props = {
  posts: Post[];
};

const Home: NextPageWithLayout<Props> = (props) => {
  return (
    <MetaContainer>
      <HomeView {...props} />
    </MetaContainer>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps = async () => {
  const data = await getLatestPosts();

  return {
    props: {
      blogs: data.contents,
    },
  };
};

export default Home;
