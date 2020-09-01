import React from 'react'

import { ExitPreviewLink } from './exitPreview';
import styles from './footer.module.css'
import { useAppContext } from '../hooks/appContext'

function ContactDetail({ field, value }) {
  switch (field) {
    case 'email':
      return (
        <a href={`mailto:${value}`} target="_top">
          {value}
        </a>
      )
    case 'phone':
      return (
        <a href={`tel:${value}`} target="_top">
          {value}
        </a>
      )
    default:
      return <p>{value}</p>
  }
}

function ContactDetails() {
  const { contact } = useAppContext();
  return (
    <ul className={styles.contact}>
      {Object.keys(contact).map(key => (
        <li key={key}>
          <ContactDetail field={key} value={contact[key]} />
        </li>
      ))}
    </ul>
  )
}

function Copyright() {
  const year = new Date().getFullYear();
  return <div className="copyright">{`© ${year} Planticrub Garden Design`}</div>
}

export default function Footer() {
  const { preview } = useAppContext();
  console.log('preview', preview);
  return (
    <div className={styles.footer}>
      <div className={styles['footer-content']}>
        <ContactDetails />
        <Copyright />
        <ExitPreviewLink />
      </div>
    </div>
  )
}
