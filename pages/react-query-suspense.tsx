import { Layout, Header, InfoBox, Name, ErrorFallback, LoadingFallback } from '@components';
import AsyncBoundary from '@hocs/async-boundary';
import React from 'react';

const ClientOnly = () => {
  return (
    <AsyncBoundary fallback={<ErrorFallback />} pendingFallback={<LoadingFallback />}>
      <Layout>
        <Header />
        <InfoBox>ℹ️ This data is loaded on client and not prefetched</InfoBox>
        <Name />
      </Layout>
    </AsyncBoundary>
  );
};

export default ClientOnly;
