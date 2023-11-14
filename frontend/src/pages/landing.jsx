import landing from '../assets/images/landing.jpeg'
import placeholder from '../assets/images/placeholder.png'

const Landing = () => {
  return (
    <>
    <section className="w-full flex xl_flex-row justify center min-h-screen gap-10 max-container">

    <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">

    <h1 className="mt-10 font-['Inter'] text-7xl max-sm:text-[70px] max-sm:leading-[82px] font-bold">
      <span className="xl:whitespace-nowrap relative z-10 pr-10">Meet CashaBlanca:</span>
      <br />
      <span className="mt-3">Your Financial Buddy</span>
    </h1>
    <h3 className="text-4xl mt-10">
    Track, set goals, and unlock your financial potential—all in one place.
    </h3>
    <p className="text-gray-500 mt-10">
    From managing your daily expenses to reaching your long-term dreams, CashaBlanca is designed with you in mind. Dive into curated lessons, stay motivated with engaging challenges, and watch your financial growth story unfold.
    </p>
    <button className="mt-10 flex justify-center items-center gap-2 px-7 py-4 border font-['Inter'] text-lg leading-none bg-teal-700 text-white rounded-full border-teal-600">
      GET STARTED
    </button>
    </div>
    
    <div className='relative flex-1 flex justify-end items-end xl:min-h-screen max-xl:py-40 bg-bottom bg-auto'>
    <img src={landing} alt="Main Landing" className='object-contain relative z-10 object-right'/>
    </div>

    </section>

    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our Features
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience the best our site has to offer
        </p>
      </div>

      <div className=' mb-16 mt-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-3 sm:gap-6 gap-14'>
        
      <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={placeholder} alt='' className='w-[282px] h-[282px]' />
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
          Budget Analysis
        </h3>
      </div>

      <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={placeholder} alt='' className='w-[282px] h-[282px]' />
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
          Reaching Financial Goals
        </h3>
      </div>

      <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={placeholder} alt='' className='w-[282px] h-[282px]' />
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
          Learn New things
        </h3>
      </div>

      </div>
    </section>
    </>
  )
}

export default Landing