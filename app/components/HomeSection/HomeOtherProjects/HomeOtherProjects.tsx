import SingleProject from '../SingleProject'
import otherProjects from './otherProjects'

const HomeOtherProjects = () => {
  return (
    <section className='px-4 lg:px-8 pb-8 mt-12'>
      <hr className='border-t-[1px] border-gray-200 w-full mx-auto opacity-20' />
      <div className='mt-8 flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-0'>
        <h1 className='font-semibold uppercase text-5xl'>Other projects</h1>
        <div className='flex flex-col items-start gap-8'>
          <p className='w-full lg:w-[40rem] text-xl lg:text-3xl leading-6 lg:leading-10 font-light'>
            Explore other projects that I have worked on.
          </p>
          <div className='w-full flex flex-col items-start gap-8'>
            {otherProjects.map((project, idx) => (
              <SingleProject key={project.title + idx} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeOtherProjects
