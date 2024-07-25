import { db } from '@/lib/db'

import CreateButton from './_components/createButton'
import CommodityCard from './_components/commodityCard'
import TradeLivePrice from './_components/tradeLivePrice'
import MobLiveTrade from './_components/MobLiveTrade'
import { currentUser } from '@/lib/auth'


const Trade = async () => {

  const user = await currentUser();

  const commoditiesForSale = await db.commodity.findMany({
    where: {
      userId: user?.id,
    }
  })

  return (

    <section className="grid m-5 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="my-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col md:col-span-2 gap-4 overflow-y-auto">
          {commoditiesForSale.map((commodity) => {

            const bidNumber = commodity.bids ? commodity.bids.length : 0;

            return (
              <CommodityCard
                id={commodity.id}
                name={commodity.name}
                bidNumber={bidNumber}
              />
            )
          })}
        </div>
        <div className="md:fixed right-2 md:col-span-1 overflow-y-auto">
          <TradeLivePrice />
        </div>
        <div className='fixed top-20 right-5 md:hidden'>
          <MobLiveTrade />
        </div>
      </div>
      <div className=''>
        <CreateButton />
      </div>
    </section>
  )
}

export default Trade