'use client'

import { useEffect, useState } from "react"
import UserSettings from "../modals/UserSettings";
import CreateCommodity from "../modals/CreateCommodity";
import DeleteCommodity from "../modals/DeleteCommodity";
import EditCommodity from "../modals/EditCommodity";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <CreateCommodity />
      <DeleteCommodity />
      <UserSettings />
      <EditCommodity />
    </>
  )
}