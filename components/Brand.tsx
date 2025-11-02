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
        width={48}
        height={48}
        priority
        className="object-contain md:w-[52px] md:h-[52px] transition-transform duration-200 group-hover:scale-105"
      />
      <span className="font-semibold tracking-tight text-lg md:text-xl text-white">
        Munk Media
      </span>
    </Link>
  )
}

