import { create } from "zustand";

import { Commodity } from "@prisma/client"

export type ModalType =
  | "UserSettings"
  | "CreateCommodity"
  | "DeleteCommodity"
  | "EditCommodity"
  | "PlaceBid"


interface ModalData {
  commodity?: Commodity,
}

interface ModalStore {
  type: ModalType | null
  data: ModalData
  isOpen: Boolean
  onOpen: (type: ModalType, data?: ModalData) => void
  onClose: () => void
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false })
}))