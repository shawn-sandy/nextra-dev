import React from 'react'
import { Header } from '@fpkit/react'
const Headers = (): JSX.Element => {
  return (
    <Header>
      <section>
        <h2>Header Section</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam</p>
        <p>
          <button type="button">Default Button</button>
        </p>
      </section>
    </Header>
  )
}

export default Headers
