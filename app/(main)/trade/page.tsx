import { db } from '@/lib/db'
import React from 'react'
import CreateCommodityCard from './_components/createCommodityCard'

const Trade = async () => {

  const commoditiesForSale = await db.commodity.findMany({
    where: {
      userId: "userId",
    }
  })

  return (
    <section>
      {commoditiesForSale.map((commodity) => (
        <CreateCommodityCard
          id={commodity.id}
          name={commodity.name}
          imageUrl={commodity.imageUrl}
        />
      ))}
    </section>
  )
}

export default Trade