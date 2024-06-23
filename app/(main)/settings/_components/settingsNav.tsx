'use client'

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const SettingsNavLinks = [
  {
    route: "/settings/general",
    label: "General",
  },
  {
    route: "/settings/security",
    label: "Security",
  },
  {
    route: "/settings/support",
    label: "Support",
  },
  {
    route: "/settings/integrations",
    label: "Integrations",
  },
  {
    route: "/settings/advanced",
    label: "Advanced",
  },
]

const SettingsNav = () => {
  const pathname = usePathname()
  return (
    <nav
      className="flex md:grid gap-4 text-sm text-muted-foreground"
    >
      {SettingsNavLinks.map((links) => {
        const isActive = (pathname.includes(links.route) && links.route.length > 1) ||
          pathname === links.route;

        return (
          <Link href={links.route} key={links.route}
            className={cn("font-semibold",
              isActive && "text-primary"
            )}
          >
            {links.label}
          </Link>
        )
      })}
    </nav>
  )
}

export default SettingsNav