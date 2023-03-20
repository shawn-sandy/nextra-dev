import nextra from 'nextra'

const withNextra = nextra({
  theme: './theme/base.tsx',
  themeConfig: './theme.config.jsx',
  staticImage: true,
  defaultShowCopyCode: true,
  readingTime: true
})

export default withNextra({
  reactStrictMode: true
})
