import { useState } from 'react';
import A from './A';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

import { sections } from '../portfolio';
import { toggleTheme } from '../utils/theme';

const Navbar = () => {
    const [showNavList, setShowNavList] = useState(false);

    const toggleNavList = () => setShowNavList(!showNavList);

    return (
        <nav className='flex items-center text-lg'>
            {sections.map(section => (
                <A
                    key={section}
                    href={`#${section}`}
                    className={'hidden md:block mr-5'}
                >
                    {section}
                </A>
            ))}
            {showNavList && (
                <div className='top-0 left-0 z-10 fixed bg-background dark:bg-background-dark w-full h-full'>
                    <ul className='flex flex-col justify-center items-center h-full'>
                        {sections.map(section => (
                            <li key={section}>
                                <A
                                    href={`#${section}`}
                                    onClick={toggleNavList}
                                >
                                    {section}
                                </A>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className='z-10 flex items-center space-x-2 text-3xl'>
                <button
                    type='button'
                    onClick={toggleTheme}
                    className='flex justify-center items-center hover:opacity-90 w-10 text-secondary dark:text-secondary-dark'
                    aria-label='toggle theme'
                >
                    <FontAwesomeIcon icon={faSun} className='block dark:hidden' />
                    <FontAwesomeIcon icon={faMoon} className='dark:block hidden' />
                </button>

                <button
                    type='button'
                    onClick={toggleNavList}
                    className='md:hidden text-primary hover:text-secondary hover:dark:text-secondary-dark dark:text-primary-dark'
                    aria-label='toggle navigation'
                >
                    {showNavList ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                </button>
            </div>
        </nav>
    )
}

export default Navbar
