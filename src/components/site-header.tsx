import { MailIcon } from "lucide-react"
import dynamic from "next/dynamic"
import Link from "next/link"

import { Icons } from "@/components/icons"
import { SiteHeaderMark } from "@/components/site-header-mark"
import { ThemeToggle } from "@/components/theme-toggle"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const BrandContextMenu = dynamic(() =>
  import("@/components/brand-context-menu").then((mod) => mod.BrandContextMenu)
)

export function SiteHeader() {
  return (
    <>
      <header className="sticky top-0 z-50 max-w-screen overflow-x-hidden bg-background px-2 pt-2">
        <div className="screen-line-top screen-line-bottom mx-auto flex h-12 items-center justify-between gap-2 border-x border-line px-2 group-has-data-[slot=layout-wide]/layout:container after:z-1 after:transition-[background-color] sm:gap-4 md:max-w-3xl">
          <BrandContextMenu>
            <Link
              className="transition-[scale] ease-out active:scale-[0.98] has-data-[visible=false]:pointer-events-none [&_svg]:h-8 [&_svg]:shrink-0"
              href="/"
              aria-label="Home"
            >
              <SiteHeaderMark />
            </Link>
          </BrandContextMenu>

          <div className="flex-1" />

          <div className="flex items-center gap-2">
            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href="https://sink.jaspreet-singh-true.workers.dev/github/test1234"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
            >
              <Icons.github className="size-4" />
            </a>

            <Separator
              orientation="vertical"
              className="data-vertical:h-4 data-vertical:self-center"
            />

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href="https://sink.jaspreet-singh-true.workers.dev/jaspreet-singh-linkedin/test1234"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <Icons.linkedin className="size-4" />
            </a>

            <Separator
              orientation="vertical"
              className="data-vertical:h-4 data-vertical:self-center"
            />

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href="mailto:jaspreet.singh.tech@gmail.com"
              target="_blank"
              rel="noopener"
              aria-label="Email"
            >
              <MailIcon className="size-4" />
            </a>

            <Separator
              orientation="vertical"
              className="data-vertical:h-4 data-vertical:self-center"
            />

            <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  )
}
