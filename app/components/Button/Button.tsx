import Link from 'next/link'
import { FiCornerRightDown } from 'react-icons/fi'

interface ButtonProps {
  text: string
}

const Button = ({ text }: ButtonProps) => {
  return (
    <Link
      href='/'
      className='text-dark py-2 px-6 rounded-full border border-dark flex items-center justify-center gap-2 hover:bg-dark hover:text-light transition'
    >
      {text}
      <div className='w-6 h-6 flex items-center justify-center rounded-full bg-dark'>
        <FiCornerRightDown className='text-light' />
      </div>
    </Link>
  )
}

export default Button
