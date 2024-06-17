import { useModal } from "@/hooks/useModalStore"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";


const formSchema = z.object({
  name: z.string().min(1, { message: "Commodity name is required" }),
  imageUrl: z.string().min(1, { message: "Commodity image is required" }),
  quantity: z.number(),
  expectedPrice: z.number(),
})

const CreateCommodity = () => {

  const { isOpen, type, onClose } = useModal();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
      quantity: "",
      expectedPrice: "",
    }
  })

  const isModalOpen = isOpen && type == "CreateCommodity";
  // const isModalOpen = true;

  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()} >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Create Commodity
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Commodity name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Commodity name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="expectedPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Commodity name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateCommodity