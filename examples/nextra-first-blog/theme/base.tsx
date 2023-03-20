import React from 'react'
import type { NextraThemeLayoutProps } from 'nextra'
import Headers from '../src/components/header'
import '@shawnsandy/first-paint/dist/css/libs/all.min.css'
// import { Tag, Nav } from '@fpkit/react'

export default function Layout({ children }: NextraThemeLayoutProps) {
  return (
    <>
      <nav>
        <h1>My Theme</h1>
      </nav>
      <Headers />
      <main>
        <section>{children}</section>
      </main>
    </>
  )
}
