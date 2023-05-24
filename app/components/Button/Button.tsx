import Link from 'next/link'
import { FiCornerDownLeft } from 'react-icons/fi'

interface ButtonProps {
  text: string
  light?: boolean
}

const Button = ({ text, light }: ButtonProps) => {
  return (
    <Link
      href='/'
      className={`${
        light ? 'text-light' : 'text-dark'
      } py-2 px-6 rounded-full border ${
        light ? 'border-light' : 'border-dark'
      } flex items-center justify-center gap-2 ${
        light
          ? ' hover:bg-light hover:text-dark'
          : 'hover:bg-dark hover:text-light'
      } transition active:scale-95`}
    >
      {text}
      <div className='w-6 h-6 flex items-center justify-center rounded-full bg-dark'>
        <FiCornerDownLeft className='text-light' />
      </div>
    </Link>
  )
}

export default Button
