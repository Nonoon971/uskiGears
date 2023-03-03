import Link from "next/link"

export const Footer = () => {
    return (
        <div>
            <div className="mx-auto md:p-4 p-2 bg-bleu flex items-center justify-between dark:bg-gray-800 ">
                <ul className="flex flex-wrap dark:text-white ">
                    <li>
                        <Link href='/about'>
                            <h3 className="mr-6 hover:text-black text-l invisible md:visible">About</h3>
                        </Link>
                    </li>
                    <li>
                        <Link href='/contact'>
                            <h3 className="mr-6 hover:text-black text-l invisible md:visible">Contact us</h3>
                        </Link>
                    </li>
                </ul>
                <span className="  dark:white text-l ">
                    <a>© 2022 Webtech™. </a>
                    <a className="md:visible invisible">All Rights Reserved.</a>
                </span>
            </div>
        </div>
    );
}