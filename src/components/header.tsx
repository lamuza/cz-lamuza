import React from "react"

type Props = {
  siteTitle?: string
  children?: never
}

const Header: React.FC<Props> = ({ siteTitle = "" }) => (
  <header className="bg-gray-100 shadow p-4 flex justify-center">
    <h1 className={"text-primary m-0 text-2xl"}>{siteTitle}</h1>
  </header>
)

export default Header
