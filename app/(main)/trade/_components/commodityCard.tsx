import Image from 'next/image'
import React from 'react'

interface CommodityCardProps {
  id: string;
  name: string;
  imageUrl: string;
}


const commodityCard = ({ id, imageUrl, name, }: CommodityCardProps) => {

  return (
    <div>
      <h2>{name}</h2>
      <Image src={imageUrl} alt='commodity-image' height={25} width={25} />

    </div>
  )
}

export default commodityCard