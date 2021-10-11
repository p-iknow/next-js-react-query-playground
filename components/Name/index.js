import React, { useState } from 'react'
import { useName } from '../../hooks/useName'

export const Name = () => {
  const { data, isLoading, isFetching } = useName()

  if (isLoading) return <div>Loading</div>

  return (
    <section>
      <span>Name </span> <span>{data.name}</span>
    </section>
  )
}
