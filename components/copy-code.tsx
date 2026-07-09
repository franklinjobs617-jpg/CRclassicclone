'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export function CopyCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // clipboard unavailable; ignore
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-lg border-2 border-border bg-background px-2.5 py-1 text-xs font-700 text-foreground transition-colors hover:border-primary hover:text-primary"
      aria-label={copied ? `Copied ${code}` : `Copy code ${code}`}
    >
      {copied ? (
        <>
          <Check className="size-3.5 text-primary" aria-hidden="true" /> Copied
        </>
      ) : (
        <>
          <Copy className="size-3.5" aria-hidden="true" /> Copy
        </>
      )}
    </button>
  )
}
