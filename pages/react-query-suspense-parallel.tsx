import { Layout, Header, InfoBox, ErrorFallback, LoadingFallback } from '@components';
import AsyncBoundary from '@hocs/async-boundary';
import { fetchAge, fetchName } from '@hooks';
import React from 'react';
import { useQuery } from 'react-query';

const ReactQuerySuspenseParallel = () => {
  // it like a prefetch call for parallel api call
  useQuery('name', () => fetchName());
  useQuery('age', () => fetchAge());
  return (
    <AsyncBoundary fallback={<ErrorFallback />} pendingFallback={<LoadingFallback />}>
      <Layout>
        <Header />
        <InfoBox>
          ℹ️React query with suspense option. But the api call is parallelly because of prefetched
          use query.
        </InfoBox>
        <Name />
      </Layout>
    </AsyncBoundary>
  );
};

export const Name = () => {
  const { data } = useQuery('name', () => fetchName(), {
    suspense: true,
  });

  return (
    <>
      <section>
        <span>Name: </span> <span>{data?.name ?? ''}</span>
      </section>
      <Age />
    </>
  );
};

export const Age = () => {
  const { data } = useQuery('age', () => fetchAge(), {
    suspense: true,
  });

  return (
    <section>
      <span>Age: </span> <span>{data?.age ?? 0}</span>
    </section>
  );
};

export default ReactQuerySuspenseParallel;
