import Logo from "../assets/images/logo.png"
import {navLinks} from "../constants/index"
import hamburger from '../assets/icons/hamburger.svg'
import Icon from './Icon';


const Navbar = () => {
  return (
    
    <header className='padding-x py-8 reltive z-10 w-full bg-gradient-to-b from-slate-100 to-slate-300 top-0 left-0 right-0'>

    <nav className="flex justify-between items-center max-container">
      <a href="/">
        <img src={Logo} alt="Logo" width={130} height={30}/>
      </a>
    

    <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">

    {
      navLinks.map((item) =>(
        
        <li key= {item.label}>
          
          <a href = {item.href} className="font-montserrat leading-normal text-lg text-slate-gray flex gap-2">

          <Icon name={item.iconName} color={item.iconColor} size={item.iconSize}/>

          {item.label}

          </a>

        </li>
      ))
    }

    </ul>
    <button className="flex max-lg:hidden wide:mr-24 justify-center items-center gap-2 px-7 py-4 border font-['Inter'] font-medium text-lg leading-normal bg-teal-700 text-white rounded-full border-teal-600">
    <a href='/'>Log in</a>
      <span>/</span>
      <a href='/'>Sign Up</a>
    </button>

    <div className='hidden max-lg:block'>
      <img src={hamburger} alt='Menu icon' width={25} height={25} />
    </div>
    </nav>
    </header>
  )
}

export default Navbar