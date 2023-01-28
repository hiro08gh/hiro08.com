import Head from 'next/head';
import { meta } from '@/src/libs/meta';

type Props = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

export const MetaContainer: React.FC<Props> = ({
  title,
  description,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} - ${meta.title}` : meta.title}</title>
        <link rel="icon" href="/image.png" />
        <meta
          name="description"
          content={description ?? meta.description}
        />
      </Head>
      {children}
    </>
  );
};