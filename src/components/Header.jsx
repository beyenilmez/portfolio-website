import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import A from './A';
import Navbar from './Navbar'

const Header = () => {
    return (
        <header className='flex justify-between items-center mx-[5%] md:mx-[12%] h-20 md:h-36'>
            <A
                className={'after:hidden text-4xl text-secondary dark:text-secondary-dark hover:opacity-90'}
                href={'/'}
            >
                <FontAwesomeIcon icon={faCode} />
            </A>
            <Navbar />
        </header>
    )
}

export default Header;
