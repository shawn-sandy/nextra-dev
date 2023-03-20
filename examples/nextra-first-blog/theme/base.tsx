import React from 'react'
import type { NextraThemeLayoutProps } from 'nextra'
import Headers from '../src/components/header'
import '@shawnsandy/first-paint/dist/css/libs/all.min.css'
// import { Tag, Nav } from '@fpkit/react'

export default function Layout({
  children,
  pageOpts,
  themeConfig
}: NextraThemeLayoutProps): JSX.Element {
  const { title, description } = themeConfig
  const { pageMap } = pageOpts
  return (
    <>
      <nav>
        <h1>{title}</h1>
      </nav>
      <Headers />
      <main>
        <section>{children}</section>
      </main>
    </>
  )
}
