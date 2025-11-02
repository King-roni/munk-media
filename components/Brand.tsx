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
        src="/brand/munk-logo.png"
        alt="Munk Media logo"
        width={34}
        height={34}
        priority
        className="object-contain transition-transform group-hover:scale-105"
      />
      <span className="text-lg md:text-xl font-semibold tracking-tight text-white">
        Munk Media
      </span>
    </Link>
  )
}

