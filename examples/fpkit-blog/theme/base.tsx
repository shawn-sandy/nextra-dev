import React from 'react'
import type { NextraThemeLayoutProps } from 'nextra'
import Headers from '../src/components/header'
import '@shawnsandy/first-paint/dist/css/libs/all.min.css'
import { Nav } from '@fpkit/next-js'
// import { Tag, Nav } from '@fpkit/react'

export default function Layout({
  children,
  pageOpts,
  themeConfig
}: NextraThemeLayoutProps): JSX.Element {
  const { title, footer, components } = themeConfig
  const { pageMap } = pageOpts
  console.log({ pageMap, themeConfig })

  return (
    <>
      <nav>
        <h1 style={{ fontSize: 'var(--fs1' }}>{title || 'Fpkit.Blog'}</h1>
      </nav>
      <Headers />
      <main>
        <Nav />
        <section>{children}</section>
      </main>
      {footer}
    </>
  )
}
