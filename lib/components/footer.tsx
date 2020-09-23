import React from 'react'

import { ExitPreviewLink } from './ExitPreview';
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
    <ul className="">
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
  return (
    <div className="w-full bg-blue-200 text-md">
      <div className="text-md py-2 bg-purple-200">
        <div className="max-w-screen-lg mx-auto px-6">
          This site is under construction. If you can't find what you're looking for, please e-mail me.
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto px-6 py-2">
        <ContactDetails />
        <Copyright />
        <ExitPreviewLink />
      </div>
    </div>
  )
}
