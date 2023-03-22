import React from 'react'
import type { NextraThemeLayoutProps } from 'nextra'
import Headers from '../src/components/header'
import '@shawnsandy/first-paint/dist/css/libs/all.min.css'
import { Nav, NavList } from '@fpkit/next-js'
// import { Tag, Nav } from '@fpkit/react'

export default function Layout({
  children,
  pageOpts,
  themeConfig
}: NextraThemeLayoutProps): JSX.Element {
  const { title, footer, components } = themeConfig
  const { pageMap } = pageOpts
  console.log({ pageMap })

  const items = pageMap.filter(item => item?.kind === 'Folder')

  console.log({ items })

  return (
    <>
      <Nav>
        <h1 style={{ fontSize: 'var(--fs1' }}>{title || 'Fpkit.Blog'}</h1>
      </Nav>
      <NavList items={items} />
      <Headers />
      <main>
        <section>{children}</section>
      </main>
      {footer}
    </>
  )
}
