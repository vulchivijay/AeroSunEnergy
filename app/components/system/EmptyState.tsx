import { useId } from 'react'
import Link from 'next/link'
import {
  Bell,
  Bookmark,
  FolderOpen,
  Newspaper,
  Search,
  Inbox,
  type LucideIcon,
} from 'lucide-react'

const emptyStateIcons = {
  projects: FolderOpen,
  articles: Newspaper,
  notifications: Bell,
  search: Search,
  records: Inbox,
  saved: Bookmark,
} satisfies Record<string, LucideIcon>

type EmptyStateProps = {
  kind: keyof typeof emptyStateIcons
  title: string
  description: string
  action?: {
    label: string
    href: string
  }
}

export function EmptyState({ kind, title, description, action }: EmptyStateProps) {
  const Icon = emptyStateIcons[kind]
  const titleId = useId()
  const descriptionId = useId()

  return (
    <section
      role="status"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="mx-auto flex max-w-xl flex-col items-center rounded-3xl border border-[#dce5da] bg-[#f7faf5] px-6 py-10 text-center sm:px-10"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d6e8b9] bg-white text-[#315d45] shadow-sm">
        <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
      </span>
      <h2 id={titleId} className="mt-5 text-2xl font-semibold tracking-tight text-[#17251f]">
        {title}
      </h2>
      <p id={descriptionId} className="mt-3 max-w-md text-base leading-7 text-[#5d6a62]">
        {description}
      </p>
      {action && (
        <Link
          href={action.href}
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[#143e2e] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#205b40] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#143e2e]"
        >
          {action.label}
        </Link>
      )}
    </section>
  )
}
