import Link from 'next/link'
import React from 'react'


const sidebarLinks = [
  {
    route: "/dashboard",
    label: "Dashboard",
  },
  {
    route: "/store",
    label: "Store",
  }
]

const Sidebar = () => {
  return (
    <section>
      <div>
        {sidebarLinks.map((link) => {
          return (
            <Link href={link.route}>
              {link.label}
            </Link>
          )
        })}
      </div>

      <div>

      </div>
    </section>
  )
}

export default Sidebar