import {useContext, useState, useEffect} from 'react';
import Link from 'next/link'
import {useTheme} from "next-themes";
import Image from 'next/image';
import logo from '../content/images/logo.png'
import { MoonIcon,SunIcon } from '@heroicons/react/20/solid'

export const  Navbar = () => {
    const [mounted, setMounted] = useState(false);
    const {systemTheme , theme, setTheme} = useTheme ();
    const [showLinks, setShowLinks] = useState();

    useEffect(() =>{
        setMounted(true);
      },[])

    const renderThemeChanger= () => {

        if(!mounted) return null;
        const currentTheme = theme === "system" ? systemTheme : theme ;

        if(currentTheme ==="dark"){
          return (
            <SunIcon className=" w-7 h-7 ml-5" role="button" onClick={() => setTheme('light')}/>
          )
        }

        else {
          return (
            <MoonIcon className=" w-7 h-7 ml-5" role="button" onClick={() => setTheme('dark')}/>
          )
        }
     };
     let Links = [
      { name: "Home", link: "/" },
      { name: "About Us", link: "/about" },
      { name: "Contact Us", link: "/contacts" },
    ]

    return (
      <div>
    < nav className="flex md:flex md:items-center md:justify-between mx-auto py-3 md:px-8 px-2 dark:bg-gray-800" >
      < div className="flex items-center w-1/2 " >
        < Image src={logo}
          width="100px"
          height="100px"
          alt="C02_Logo"
        />
        <span>
          {renderThemeChanger()}
        </span>
        
      </div >
      <div className='absolute top-10 right-0 md:hidden'>
        <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-black hover:border-black" onClick={() => setShowLinks(!showLinks)}>
          <svg className={`fill-current h-3 w-3 ${showLinks ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>menu</title><path d="M0 0h20v20H0z" fill="none"/><path d="M0 5h20v2H0zM0 10h20v2H0zM0 15h20v2H0z"/></svg>
          <svg className={`fill-current h-3 w-3 ${showLinks ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>close</title><path d="M14.348 14.849a1.25 1.25 0 0 1-1.768 0L10 11.768l-2.58 2.58a1.25 1.25 0 0 1-1.768-1.768L8.232 10l-2.58-2.58a1.25 1.25 0 1 1 1.768-1.768L10 8.232l2.58-2.58a1.25 1.25 0 0 1 1.768 1.768L11.768 10l2.58 2.58a1.25 1.25 0 0 1 0 1.768z"/></svg>
        </button>
      </div>

      <div className={`md:flex items ${showLinks ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
          {Links.map((link) => (
            <li key={link.name} className="md:my-0 my-1">
              <Link href={link.link}>
                <a className="md:mx-4 px-3 py-2 text-black hover:text-gray-500 dark:text-white dark:hover:text-gray-600 font-medium rounded-md">{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  </div>
        
    );
}