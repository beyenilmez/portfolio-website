import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () =>
            window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return isVisible ? (
        <div className='md:block right-16 bottom-8 fixed hidden'>
            <a href='#top' className='flex justify-center items-center bg-secondary dark:bg-secondary-dark hover:opacity-90 rounded-full w-12 h-12 text-background text-xl dark:text-background-dark'>
                <FontAwesomeIcon icon={faArrowUp} />
            </a>
        </div>
    ) : null
}

export default ScrollToTop
