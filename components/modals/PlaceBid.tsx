import React from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod"
import { comment } from 'postcss'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useModal } from '@/hooks/useModalStore'


const formSchema = z.object({
  price: z.string().min(1, { message: "Field cannot be empty" }),
  comment: z.string(),
})


const PlaceBid = () => {

  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === "PlaceBid";

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      price: "",
      comment: "",
    }
  })

  const isLoading = form.formState.isSubmitting;

  const onSubmit = () => {

  }

  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Place your bid
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name='price'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bidding Price</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='price'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bidding Price</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
          <DialogFooter>
            <Button disabled={isLoading}
              className=''
            />
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default PlaceBid