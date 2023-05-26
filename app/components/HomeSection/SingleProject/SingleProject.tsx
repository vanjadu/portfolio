import Link from 'next/link'
import { FiCornerDownLeft } from 'react-icons/fi'

interface SingleProjectProps {
  title: string
  description: string
  link: string
}

const SingleProject = ({ title, description, link }: SingleProjectProps) => {
  return (
    <Link href={link} target='_blank' className='w-full'>
      <div className='w-full flex flex-col items-start justify-between gap-6 transition projectLink bg-lightDark px-4 lg:px-8 py-3 rounded-xl'>
        <div className='w-full flex items-center justify-between'>
          <div className='flex flex-col items-start gap-1'>
            <p className='text-2xl projectLinkTitle'>{title}</p>
            <p className='opacity-80 projectLinkDesc'>{description}</p>
          </div>
          <div className='w-10 h-10 flex items-center justify-center rounded-full bg-light'>
            <FiCornerDownLeft className='text-lg   !text-dark' />
          </div>
        </div>
        <hr className='border-t-[2px] border-gray-200 w-full mx-auto opacity-20 rounded-full' />
      </div>
    </Link>
  )
}

export default SingleProject
