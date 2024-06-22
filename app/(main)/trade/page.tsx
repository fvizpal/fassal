import { db } from '@/lib/db'
import React from 'react'
import CreateCommodityCard from './_components/createCommodityCard'
import CreateButton from './_components/createButton'

const Trade = async () => {

  // const commoditiesForSale = await db.commodity.findMany({
  //   where: {
  //     userId: "userId",
  //   }
  // })

  return (
    <section>
      {/* //   {commoditiesForSale.map((commodity) => (
    //     <div key={commodity.id}>
    //       <CreateCommodityCard
    //         id={commodity.id}
    //         name={commodity.name}
    //         imageUrl={commodity.imageUrl}
    //       />
    //     </div>
    //   ))} */}
      <CreateButton />
    </section >
  )
}

export default Trade