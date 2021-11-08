import { Layout, Header, InfoBox, Name } from '@components';
import React from 'react';

const ClientOnly = () => {
  return (
    <Layout>
      <Header />
      <InfoBox>ℹ️ This data is loaded on client and not prefetched</InfoBox>
      <Name />
    </Layout>
  );
};

export default ClientOnly;
