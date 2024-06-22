'use client'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { useModal } from '@/hooks/useModalStore'
import Image from 'next/image'
import React from 'react'


const CreateButton = () => {
  const { onOpen } = useModal()

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild className=' fixed bottom-10 right-10 bg-primary h-50 w-50 hover:bg-green-400'>
          <Button variant="outline" onClick={() => onOpen("CreateCommodity")}>
            <Image
              src={'/assets/icons/sprout-icon.svg'}
              alt='sprout'
              width={50}
              height={50}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Create Commodity</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default CreateButton