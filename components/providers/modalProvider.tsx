'use client'

import { useEffect, useState } from "react"
import UserSettings from "../modals/UserSettings";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <UserSettings />
    </>
  )
}