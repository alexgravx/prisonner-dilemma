import Link from "next/link"
import { ModeToggle } from "@/components/custom-theme-toggle"

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between m-4">
        <ModeToggle />
        <nav className="ml-auto text-sm font-medium space-x-6">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Game</Link>
          <Link href="https://en.wikipedia.org/wiki/Prisoner%27s_dilemma">About</Link>
        </nav>
      </div>
    </header>
  )
}