import { DiReact, DiGit } from 'react-icons/di'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiTailwindcss } from 'react-icons/si'
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
      'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
    icon: DiReact,
  },
  {
    title: 'Next User Interface',
    description:
      'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
    icon: TbBrandNextjs,
  },
  {
    title: 'TailwindCSS Styling',
    description:
      'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
    icon: SiTailwindcss,
  },
  {
    title: 'Git Version Control',
    description:
      'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
    icon: DiGit,
  },
]

export default servicesCards
