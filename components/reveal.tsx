"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type RevealProps = React.HTMLAttributes<HTMLDivElement> & {
  delay?: number
}

// Fades and slides its children in once they scroll into view.
export function Reveal({ delay = 0, className, style, children, ...props }: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn("scroll-reveal", visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </div>
  )
}
