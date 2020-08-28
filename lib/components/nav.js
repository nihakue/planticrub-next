import React from 'react'
import Link from 'next/link';
import {useRouter} from 'next/router';

import styles from './nav.module.css'

const pages = ['/', '/gallery', '/services', '/testimonials'];
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
    <nav className={styles.nav}>
      <ul>
        {pages.map((path) => (
          <li key={path}>
            <Link href={path}>
              <a className={router.pathname === path ? styles.active : ''}>{formatPath(path)}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
