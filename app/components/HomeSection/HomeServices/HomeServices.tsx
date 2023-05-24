import servicesCards from './servicesCards'
import SingleService from '../SingleService'
import Button from '../../Button'

const HomeServices = () => {
  return (
    <section className='px-4 lg:px-8 mt-24 pb-16'>
      <hr className='border-t-[1px] border-gray-200 w-full mx-auto opacity-20' />
      <div className='flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-0 mt-8'>
        <h1 className='font-semibold text-5xl uppercase'>Tech I use</h1>
        <div className='flex flex-col items-start gap-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mt-8 lg:mt-0'>
            {servicesCards.map((service, idx) => (
              <SingleService key={service.title + idx} {...service} />
            ))}
          </div>
          <Button text='View projects' light />
        </div>
      </div>
    </section>
  )
}

export default HomeServices
