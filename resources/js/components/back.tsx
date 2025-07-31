import { Link } from '@inertiajs/react'

type BackProps = {
  href: string;
  text?: string;
}

export default function Back({
  href,
  text = 'Back'
}: BackProps) {
  return (
    <div className='mb-4'>
      <Link href={href} className="text-blue-500 text-sm mb-4 inline-block">
        &larr; {text}
      </Link>
    </div>
  )
}