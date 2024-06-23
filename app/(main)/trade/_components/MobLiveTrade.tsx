import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import React from 'react'
import TradeLivePrice from './tradeLivePrice';

const MobLiveTrade = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Live menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <TradeLivePrice />
      </SheetContent>
    </Sheet>
  )
}

export default MobLiveTrade