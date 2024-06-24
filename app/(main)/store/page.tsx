import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const Store = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shovel</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid w-full items-center gap-4'>
          <Image
            src={""}
            alt='storeimage'
            width={50}
            height={50}
          />
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium natus ex nulla volupta</div>
          <div className='text-2xl font-bold'>RS 250</div>
        </div>
      </CardContent>
      <CardFooter className='flex '>
        <Button>BUY</Button>
      </CardFooter>
    </Card>

  )
}

export default Store