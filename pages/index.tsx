import AsyncBoundary from 'hocs/async-boundary';
import { fetchName } from '@hooks';
import React from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { ErrorFallback, Header, InfoBox, Layout, LoadingFallback, Name } from '@components';

const Home = () => {
  return (
    <AsyncBoundary fallback={<ErrorFallback />} pendingFallback={<LoadingFallback />}>
      <Layout>
        <Header />
        <InfoBox>ℹ️ This page shows how to use multiple React-Query.</InfoBox>
        <Name />
        <button
          type="button"
          onClick={() => {
            throw new Error('Sentry Frontend Error');
          }}
        >
          Throw error
        </button>
      </Layout>
    </AsyncBoundary>
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
