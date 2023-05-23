const HomeAbout = () => {
  return (
    <section className='px-4 lg:px-8 pb-8'>
      <hr className='border-t-[1px] border-gray-200 w-full mx-auto opacity-20' />
      <div className='mt-8 flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-0'>
        <h1 className='font-semibold uppercase text-5xl'>About me</h1>
        <p className='w-full lg:w-1/2 text-xl lg:text-3xl leading-6 lg:leading-10 font-light'>
          As a creative developer, I focus on both design and development —
          allowing me to work on projects from concept until the very moment we
          hit publish. Unique layouts, interactions and great typography is what
          I focus on when working on websites.
        </p>
      </div>
    </section>
  )
}

export default HomeAbout
