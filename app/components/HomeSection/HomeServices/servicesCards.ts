import { DiReact, DiGit, DiSass } from 'react-icons/di'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiTailwindcss, SiRedux } from 'react-icons/si'
import { IconType } from 'react-icons'

interface ServicesCard {
  title: string
  description: string
  icon: IconType
}

const servicesCards = [
  {
    title: 'React User Interface',
    description:
      'React: Powerful JavaScript library for building interactive user interfaces.',
    icon: DiReact,
  },
  {
    title: 'Next User Interface',
    description: 'Next: Lightning-fast, server-rendered React framework.',
    icon: TbBrandNextjs,
  },
  {
    title: 'TailwindCSS Styling',
    description:
      'TailwindCSS: Highly customizable utility-first CSS framework.',
    icon: SiTailwindcss,
  },
  {
    title: 'Sass Styling',
    description: 'SASS: Feature-rich CSS extension language.',
    icon: DiSass,
  },
  {
    title: 'Redux State Management',
    description:
      'Redux: Predictable state management for JavaScript applications.',
    icon: SiRedux,
  },
  {
    title: 'Git Version Control',
    description:
      'Git: Distributed version control system for efficient collaboration and code management.',
    icon: DiGit,
  },
]

export default servicesCards
