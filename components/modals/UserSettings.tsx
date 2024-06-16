import { useModal } from '@/hooks/useModalStore'
import React from 'react'
import { Dialog, DialogContent, DialogHeader } from '../ui/dialog';

const UserSettings = () => {

  const { isOpen, type, onClose, onOpen } = useModal()

  const isModalOpen = isOpen && type === 'UserSettings';


  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent>
        <DialogHeader>User Settings</DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default UserSettings