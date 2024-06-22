import { useModal } from "@/hooks/useModalStore"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog"

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

import axios from "axios";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { FileUpload } from "../shared/fileUploader";

const formSchema = z.object({
  name: z.string().min(1, { message: "Commodity name is required" }),
  imageUrl: z.string().min(1, {
    message: "Community image is required."
  }),
  quantity: z.string().min(1, { message: "Quantity is required" }),
  expectedPrice: z.string().min(1, { message: "Enter expected price" }),
})

const CreateCommodity = () => {

  const router = useRouter();

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

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/trade/farmer", values);

      form.reset();
      router.refresh();
      onClose();
    } catch (error) {
      console.log(error);
    }
  }

  const handleClose = () => {
    form.reset();
    onClose();
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose} >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Create Commodity
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex items-center justify-center text-center">
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <FileUpload
                        endpoint="commodityImage"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Commodity name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expectedPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter className="mt-5">
              <Button disabled={isLoading} className="w-full">
                Create
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateCommodity