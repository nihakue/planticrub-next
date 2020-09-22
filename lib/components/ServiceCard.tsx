import Link from "next/link";
import React from "react";

export function ServiceCard({ href, bg, title, description}: any) {
  return (
    <Link href={href}>
      <a className="flex flex-col max-w-md mb-5 items-center stack-1 shadow bg-gray-200 hover:shadow-lg cursor-pointer">
        <div className="relative flex items-end justify-center bg-clip-border h-64 w-full bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
          <div className="-mb-4 font-semibold rounded-sm bg-blue-200 px-4 py-2 shadow text-gray-800">Learn More</div>
        </div>
        <div className="stack-1 p-6 flex flex-col items-center">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-md font-light">{description}</p>
        </div>
      </a>
    </Link>
  )
}