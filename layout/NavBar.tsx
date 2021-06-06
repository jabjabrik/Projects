import SideBar from "./SideBar"
import Link from 'next/link'
import { useState } from "react";

interface NavBarProps {
    active: string,
    isDark: boolean,
    setIsDark: (param: boolean) => void,
}

const NavBar = ({ active, isDark, setIsDark }: NavBarProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(true)
    const onChecked = () => {
        const html = document.querySelector('html') as HTMLElement;
        html.classList.toggle('dark');
        setIsDark(!isDark)
        setIsChecked(!isChecked);
    };
    return (
        <nav className="flex absolute right-0 left-0 lg:shadow-md flex-col lg:flex-row lg:items-center px-3 py-2 lg:px-6 lg:py-5 bg-gradient-to-br from-rose-600 to-pink-700 shadow-2xl">
            <div className="flex justify-between items-center lg:flex-none">
                <div className="flex items-center">
                    <SideBar />
                    <Link href="/">
                        <a className={`${active === 'home' ? 'lg:border-rose-200' : 'lg:border-rose-400'} font-bold uppercase text-gray-100  lg:mr-4 lg:hover:border-rose-200 border-b-2 transition lg:text-lg tracking-widest`} >Projects</a>
                    </Link>
                </div>
                <div className={`${active === 'home' ? 'hidden' : 'block'} lg:hidden`}>
                    <label htmlFor="toggleB" className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input onChange={onChecked} type="checkbox" id="toggleB" className="sr-only" />
                            <div className="block bg-gray-600 w-14 h-8 rounded-full" />
                            <div className={`${isChecked ? ' translate-x-full bg-teal-500' : 'translate-x-0 bg-white'}  transform absolute left-1 top-1  w-6 h-6 rounded-full transition`} />
                        </div>
                    </label>
                </div>
            </div>
            <div className="hidden lg:flex lg:flex-row lg:justify-between lg:items-center w-full">
                <section className="flex">
                    {['projects', 'technology', 'about'].map(category => (
                        <Link href={`/${category}`} key={category}>
                            <a className={`${active === category ? 'text-white' : 'text-rose-200'} capitalize transition text-lg hover:text-white ml-4`}>{category}</a>
                        </Link>
                    ))}
                </section>
                <section className="flex flex-col lg:flex-row">
                    <div className="h-8">
                        <label htmlFor="toggleB" className={`${active === 'home' ? 'hidden' : 'block'} flex items-center cursor-pointer`}>
                            <div className="relative">
                                <input onChange={onChecked} type="checkbox" id="toggleB" className="sr-only" />
                                <div className="block bg-gray-600 w-14 h-8 rounded-full" />
                                <div className={`${isChecked ? ' translate-x-full bg-teal-500' : 'translate-x-0 bg-white'}  transform absolute left-1 top-1  w-6 h-6 rounded-full transition`} />
                            </div>
                        </label>
                    </div>
                    <div className="flex items-center ml-4 hover:text-white text-rose-200 transition cursor-pointer">
                        <svg className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                        </svg>
                        <Link href="/">
                            <a>Sign in</a>
                        </Link>
                    </div>
                    <div className="flex items-center ml-4 hover:text-white text-rose-200 transition cursor-pointer">
                        <svg className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                        </svg>
                        <Link href="/">
                            <a>Sign up</a>
                        </Link>
                    </div>
                </section>
            </div>
        </nav>
    )
}

export default NavBar
