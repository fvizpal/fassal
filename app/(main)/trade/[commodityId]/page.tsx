import React from 'react'
import CommodityDetail from './_components/CommodityDetail'
import Status from './_components/Status'
import CommodImage from './_components/CommodImage'
import Bids from './_components/Bids'
import { db } from '@/lib/db'

const Commodity = async (
  { params }:
    { params: { commodityId: string } }
) => {

  const commodity = await db.commodity.findUnique({
    where: {
      id: params.commodityId
    }
  })

  return (
    <main className="grid m-5 flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="mx-auto grid max-w-[70rem] flex-1 auto-rows-max gap-4">
        <div className="hidden md:grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <CommodityDetail name={commodity?.name} />
            <Bids />
          </div>
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <Status />
            <CommodImage />
          </div>
        </div>
        <div className="grid md:hidden gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <CommodityDetail name={commodity?.name} />
            <Status />
            <CommodImage />
            <Bids />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Commodity

