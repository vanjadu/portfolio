interface AlterLink {
  number: number
  title: string
  href: string
}

const alterLinks: AlterLink[] = [
  {
    number: 1,
    title: 'Home',
    href: '/',
  },
  {
    number: 2,
    title: 'About',
    href: '#about',
  },
  {
    number: 3,
    title: 'Projects',
    href: '#projects',
  },
  {
    number: 4,
    title: 'Contact',
    href: '#contact',
  },
]

export default alterLinks
