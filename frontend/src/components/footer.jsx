import logo from '../assets/images/logo.png'

const Footer = () => {
  return (
    <footer className='max-container'>

      <div className='bg-slate-100 flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={logo}
            alt='logo'
            width={150}
            height={50}
            className='rounded-full m-0'
          />
          <p>    Copyright. All rights reserved.</p>
        </div>
        <p className='font-[Inter] cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer