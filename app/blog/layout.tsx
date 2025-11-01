import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Munk Media',
  description: 'Creative strategy, creator economy insights, and influencer marketing playbooks from Munk Media.',
  openGraph: {
    title: 'Blog | Munk Media',
    description: 'Creative strategy, creator economy insights, and influencer marketing playbooks from Munk Media.',
    type: 'website',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

