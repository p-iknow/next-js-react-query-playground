import { Layout, Header, InfoBox, ErrorFallback, LoadingFallback } from '@components';
import AsyncBoundary from '@hocs/async-boundary';
import { fetchName } from '@hooks';
import { fetchAge } from '@hooks/use-age';
import React from 'react';
import { useQuery } from 'react-query';

const ReactQuerySuspense = () => {
  return (
    <AsyncBoundary fallback={<ErrorFallback />} pendingFallback={<LoadingFallback />}>
      <Layout>
        <Header />
        <InfoBox>
          ℹ️ React query with suspense option. The api call is sequentially called because of
          suspense option.
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
      <span>Age: </span> <span>{data?.age ?? ''}</span>
    </section>
  );
};

export default ReactQuerySuspense;
