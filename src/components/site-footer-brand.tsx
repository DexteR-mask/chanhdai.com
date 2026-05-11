"use client"

import { FluidGradientText } from "@/registry/components/fluid-gradient-text"

export function SiteFooterInteractiveLogotype() {
  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/10">
      <div className="w-full overflow-hidden">
        <FluidGradientText
          text="JASPREET SINGH"
          svgViewBoxWidth={2500}
          svgViewBoxHeight={280}
          gradientId="footer_gradient_text"
        />
      </div>
    </div>
  )
}
