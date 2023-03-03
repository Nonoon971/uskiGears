import {useContext, useState, useEffect} from 'react';
import Link from 'next/link'
import {useTheme} from "next-themes";
import Image from 'next/image';
import logo from '../content/images/accueil.png'
import { MoonIcon,SunIcon } from '@heroicons/react/20/solid'

export const  Navbar = () => {
    const [mounted, setMounted] = useState(false);
    const {systemTheme , theme, setTheme} = useTheme ();

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
    < nav className="md:flex md:items-center md:justify-between mx-auto py-3 md:px-8 px-2 bg-bleu dark:bg-gray-800" >
      < div className="flex items-center " >
        < Image src={logo}
          width="100px"
          height="50px"
          alt="my-blog"
        />
        <span>
          {renderThemeChanger()}
        </span>
      </div >
      <ul className=" items-center md:space-x-20 md:flex dark:text-white">
        {
          Links.map((items) => (
            <div key={items.name}>
              <li>
                <h3 className=" rounded hover:text-black text-l"><Link href={items.link}>{items.name}</Link></h3>
              </li>
            </div>
          ))
        }
      </ul>
    </nav>
  </div>
        
    );
}