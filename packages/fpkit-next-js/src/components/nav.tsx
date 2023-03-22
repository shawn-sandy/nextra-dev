import { Tag } from '@fpkit/react'
import { useId } from 'react'
import Link from 'next/link'

export interface NavItemProps {
  item: { name: string; route: string }
}
export default function Nav({
  children,
  ...props
}: {
  children: React.ReactNode
}) {
  return (
    <Tag as="nav" {...props}>
      {children}
    </Tag>
  )
}

export const NavItem = ({ item, ...props }: NavItemProps) => {
  if (!item) {
    throw new Error('NavItem requires a item prop')
  }

  return (
    <>
      <li {...props}>
        <Link style={{ textTransform: 'capitalize' }} href={item.route}>
          {item.name}
        </Link>
      </li>
    </>
  )
}

// type NavListProps = {
//   items: NavItemProps[]
// }

// create a navlist component the takes a list of items and renders a nav list
// use the NavItem component to render the list items
export const NavList = ({ items }: { items: NavItemProps[] }) => {
  return (
    <>
      {items?.map(item => {
        // return <NavItem key={`${item?.route}`} item={item} />
        // return JSON.stringify(item?.name)
      })}
    </>
  )
}
