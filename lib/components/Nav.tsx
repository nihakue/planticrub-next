import React from 'react'
import Link from 'next/link';
import {useRouter} from 'next/router';

const pages = ['/', '/projects', '/services', '/testimonials', '/about'];
const upper = lower => lower.replace(/^\w/, c => c.toUpperCase())

function formatPath(path) {
  if (path === '/') {
    return 'Home'
  }
  return upper(path.replace(/\//g, ''))
}

export default function Nav() {
  const router = useRouter();
  return (
    <nav className="">
      <ul className="flex flex-wrap h-full items-center">
        {pages.map((path) => {
          const active = router.asPath === path;
          return (<li className={`ml-3 p-1 py-0 ${active ? "border-b-2" : ""}`} key={path}>
            <Link href={path}>
              <a>{formatPath(path)}</a>
            </Link>
          </li>
        )})}
      </ul>
    </nav>
  )
}
