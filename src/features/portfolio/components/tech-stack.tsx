import Image from "next/image"

import { TECH_STACK } from "../data/tech-stack"
import faviconMap from "../data/tech-stack-favicons.json"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

export function TechStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <ul className="flex flex-wrap gap-2">
          {TECH_STACK.map((tech) => {
            const faviconUrl = faviconMap[tech.key as keyof typeof faviconMap]

            return (
              <li key={tech.key} className="flex">
                <a
                  href={tech.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={tech.title}
                  className="flex items-center gap-1.5 rounded-full border bg-zinc-50 px-1.5 py-0.5 text-xs tracking-wide text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 retina:border-[0.5px] [&_img]:size-3.5 [&_img]:select-none"
                >
                  {faviconUrl && (
                    <Image
                      src={faviconUrl}
                      alt={`${tech.title} icon`}
                      width={32}
                      height={32}
                    />
                  )}
                  {tech.title}
                </a>
              </li>
            )
          })}
        </ul>
      </PanelContent>
    </Panel>
  )
}
