import { IconType } from 'react-icons'

interface SingleServiceProps {
  title: string
  description: string
  icon: IconType
}

const SingleService = ({
  title,
  description,
  icon: Icon,
}: SingleServiceProps) => {
  return (
    <div className='p-8 flex flex-col items-start justify-between bg-lightDark rounded-xl'>
      <div className='flex flex-col items-start gap-4 w-72 h-60 lg:h-80'>
        <div className='w-20 h-20 bg-light text-dark rounded-xl flex items-center justify-center'>
          <Icon className='text-6xl' />
        </div>
        <h2 className='text-2xl'>{title}</h2>
      </div>
      <p className='w-60'>{description}</p>
    </div>
  )
}

export default SingleService
