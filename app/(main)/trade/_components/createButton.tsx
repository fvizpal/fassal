'use client'

import { useModal } from '@/hooks/useModalStore'
import React from 'react'

const CreateButton = () => {
  const { onOpen } = useModal()

  return (
    <button onClick={() => onOpen("CreateCommodity")}>
      Create Commodity
    </button>
  )
}

export default CreateButton