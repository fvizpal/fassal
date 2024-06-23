import { db } from '@/lib/db'

import CreateButton from './_components/createButton'
import CommodityCard from './_components/commodityCard'
import TradeLivePrice from './_components/tradeLivePrice'
import MobLiveTrade from './_components/MobLiveTrade'

const commoditiesForSale = [
  {
    id: "qwe43",
    name: "ABC",
    imageUrl: "/assets/images/Krishi-bazaar-logo2.jpg"
  },
  {
    id: "23d4",
    name: "ABC",
    imageUrl: "/assets/images/Krishi-bazaar-logo2.jpg"
  },
  {
    id: "q5f4",
    name: "ABC",
    imageUrl: "/assets/images/Krishi-bazaar-logo2.jpg"
  },
  {
    id: "3f5y",
    name: "ABC",
    imageUrl: "/assets/images/Krishi-bazaar-logo2.jpg"
  },
  {
    id: "2345ft",
    name: "ABC",
    imageUrl: "/assets/images/Krishi-bazaar-logo2.jpg"
  },
  {
    id: "34t6",
    name: "ABC",
    imageUrl: "/assets/images/Krishi-bazaar-logo2.jpg"
  },
  {
    id: "w454",
    name: "ABC",
    imageUrl: "/assets/images/Krishi-bazaar-logo2.jpg"
  },
]

const Trade = async () => {

  // const commoditiesForSale = await db.commodity.findMany({
  //   where: {
  //     userId: "userId",
  //   }
  // })

  return (
    <section>
      <div className='flex'>
        <div className='w-full'>
          {commoditiesForSale.map((commodity) => (
            <div key={commodity.id}
              className=' m-5'
            >
              <CommodityCard
                id={commodity.id}
                name={commodity.name}
                imageUrl={commodity.imageUrl}
              />
            </div>
          ))}
        </div>
        <div className='hidden md:block'>
          <TradeLivePrice />
        </div>
        <div className='fixed top-20 right-5 md:hidden'>
          <MobLiveTrade />
        </div>
      </div>
      <div className=''>
        <CreateButton />
      </div>
    </section >
  )
}

export default Trade