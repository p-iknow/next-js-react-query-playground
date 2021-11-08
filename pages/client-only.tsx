import React from 'react'
import { Layout, Header, InfoBox, Name } from '../components'

const ClientOnly = () => {
  return (
    <Layout>
      <Header />
      <InfoBox>ℹ️ This data is loaded on client and not prefetched</InfoBox>
      <Name />
    </Layout>
  )
}

export default ClientOnly
