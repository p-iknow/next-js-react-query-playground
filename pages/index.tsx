import { Layout, Header, InfoBox, Name } from '@components';
import { fetchName } from '@hooks';
import React from 'react';
import { dehydrate, QueryClient } from 'react-query';

const Home = () => {
  return (
    <Layout>
      <Header />
      <InfoBox>ℹ️ This page shows how to use SSG with React-Query.</InfoBox>
      <Name />
    </Layout>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('name', () => fetchName());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
