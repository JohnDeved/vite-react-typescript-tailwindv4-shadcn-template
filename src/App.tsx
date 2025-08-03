import { FiRefreshCw } from 'react-icons/fi'
import { Button } from '@/components/ui/button'

function TechBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-background/60 px-2.5 py-1 text-xs text-muted-foreground">
      {children}
    </span>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 text-foreground grid place-items-center px-6">
      <main className="w-full max-w-3xl rounded-2xl border border-border/60 bg-card/70 backdrop-blur p-8 shadow-sm dark:shadow-zinc-950/50">
        <header className="flex items-center gap-3">
          <FiRefreshCw
            className="size-8 text-primary animate-spin-slow motion-reduce:animate-none"
            aria-hidden="true"
          />
          <h1 className="text-2xl font-semibold tracking-tight">
            Minimal React + Tailwind v4 Template
          </h1>
        </header>

        <section className="mt-4 text-sm text-muted-foreground leading-relaxed">
          This is a minimal, production-ready template that pairs modern React with Tailwind CSS v4
          and shadcn/ui on top of Vite. It ships with dark-mode styling by default and a tiny set of
          sensible defaults.
        </section>

        <section className="mt-6 flex flex-wrap items-center gap-2">
          <TechBadge>Vite</TechBadge>
          <TechBadge>React 19</TechBadge>
          <TechBadge>TypeScript</TechBadge>
          <TechBadge>Tailwind CSS v4</TechBadge>
          <TechBadge>shadcn/ui</TechBadge>
          <TechBadge>React Compiler</TechBadge>
        </section>

        <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-border p-4 bg-background">
            <h2 className="font-medium mb-2">What’s Included</h2>
            <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
              <li>Pre-configured Tailwind v4 via @tailwindcss/vite</li>
              <li>Dark-mode-only styling with html.dark</li>
              <li>shadcn/ui + base Button component</li>
              <li>Path alias @ → /src</li>
              <li>React Compiler enabled via Babel plugin</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-4 bg-background">
            <h2 className="font-medium mb-2">Next Steps</h2>
            <p className="text-sm text-muted-foreground">
              Start adding components and pages. Use the Button below as a reference for shadcn/ui
              usage and Tailwind tokens. Adjust tokens in src/index.css to match your brand.
            </p>
          </div>
        </section>

        <section className="mt-6 flex items-center gap-3">
          <Button>
            Get Started
          </Button>

          <a
            href="https://tailwindcss.com/docs/installation/using-vite"
            target="_blank"
            rel="noreferrer"
            className="text-sm underline text-primary hover:opacity-80"
          >
            Tailwind + Vite guide
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
