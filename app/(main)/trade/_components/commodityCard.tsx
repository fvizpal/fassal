'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { useRouter } from 'next/navigation'

import React from 'react'

interface CommodityCardProps {
  id: string,
  name: string,
}


const CommodityCard = ({ id, name }: CommodityCardProps) => {
  const router = useRouter()
  return (
    <Card
      key={id}
    >

      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          Commodity name
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">

          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        <Button
          onClick={() => router.push(`/trade/${id}`)}
        >
          View More
        </Button>
      </CardFooter>
    </Card>

  )
}

export default CommodityCard