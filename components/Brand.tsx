import Image from 'next/image'
import Link from 'next/link'

export function Brand() {
  return (
    <Link 
      href="/" 
      className="flex items-center gap-2 md:gap-3 shrink-0 group"
      aria-label="Munk Media – Home"
    >
      <Image
        src="/brand/munk-logo.svg"
        alt="Munk Media logo"
        width={36}
        height={36}
        priority
        className="h-7 w-7 md:h-9 md:w-9 object-contain transition-transform group-hover:scale-105"
      />
      <span className="text-lg md:text-xl font-semibold tracking-tight text-mm-ink">
        Munk Media
      </span>
    </Link>
  )
}

