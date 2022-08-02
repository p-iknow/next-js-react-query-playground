import { Layout, Header, InfoBox, ErrorFallback, LoadingFallback } from '@components';
import { fetchAge, fetchName } from '@hooks';
import React from 'react';
import { useQuery } from 'react-query';

const ReactQueryWithoutSuspense = () => {
  const {
    isIdle: isNameIdle,
    isLoading: isNameLoading,
    isError: isNameError,
  } = useQuery('name', () => fetchName());
  const {
    isIdle: isAgeIdle,
    isLoading: isAgeLoading,
    isError: isAgeError,
  } = useQuery('age', () => fetchAge());

  const isLoading = isNameLoading || isAgeLoading;
  const isIdle = isNameIdle && isAgeIdle;
  const isError = isNameError || isAgeError;

  if (isLoading || isIdle) return <LoadingFallback />;

  if (isError) return <ErrorFallback />;

  return (
    <Layout>
      <Header />
      <InfoBox>ℹ️ React query without suspense option</InfoBox>
      <Name />
    </Layout>
  );
};

export const Name = () => {
  const { data } = useQuery('name', () => fetchName());

  return (
    <>
      <section>
        <span>Name </span> <span>{data?.name ?? ''}</span>
      </section>
      <Age />
    </>
  );
};

export const Age = () => {
  const { data } = useQuery('age', () => fetchAge());

  return (
    <section>
      <span>Age: </span> <span>{data?.age ?? ''}</span>
    </section>
  );
};
export default ReactQueryWithoutSuspense;
