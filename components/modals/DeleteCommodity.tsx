

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { Button } from '../ui/button'
import { useModal } from '@/hooks/useModalStore'

const DeleteCommodity = () => {
  const { type, isOpen, onClose } = useModal()

  const isModalOpen = isOpen && type === "DeleteCommodity";

  const handleClick = () => {

  }

  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Commodity</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Are you sure you want to delete this commodity? This cannot be undone.
        </DialogDescription>
        <DialogFooter>
          <Button onClick={handleClick}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteCommodity