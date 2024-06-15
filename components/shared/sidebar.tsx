"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { HomeIcon, StoreIcon, DatabaseIcon } from 'lucide-react'


export const sidebarLinks = [
  {
    label: "Home",
    route: "/dashboard",
    icon: HomeIcon
  },
  {
    label: "Store",
    route: "/store",
    icon: StoreIcon
  },
  {
    label: "Analysis",
    route: "/analysis",
    icon: DatabaseIcon,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className=" sticky left-0 top-0 flex h-screen flex-col w-[200px] justify-between overflow-auto border-r pb-5 pt-28 max-md:hidden">
      <div className='flex w-full flex-1 flex-col gap-6 px-6'>
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`relative flex justify-start gap-4 rounded-lg p-4 ${isActive && " bg-green-400 "}`}
            >
              {<link.icon />}
              <p className=' text-zinc-800 max-md:hidden'>{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  )
}

export default Sidebar