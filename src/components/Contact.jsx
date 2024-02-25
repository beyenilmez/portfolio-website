import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { contact } from '../portfolio'

const Contact = () => {
    if (!contact.email) return null

    return (
        <section id='contact' className='flex flex-col justify-center items-center mt-8 pt-8'>
            <h2 className='mb-10 font-bold text-4xl text-center uppercase'>Contact</h2>
            <a
                href={`mailto:${contact.email}`}
                className="relative before:top-0 before:bottom-0 before:left-0 hover:before:left-0 before:z-0 before:absolute border-2 border-secondary dark:border-secondary-dark hover:before:bg-secondary dark:hover:before:bg-secondary-dark before:bg-secondary dark:before:bg-secondary-dark py-2 w-32 before:w-0 hover:before:w-full before:h-full font-semibold text-center text-secondary hover:text-background dark:hover:text-background-dark dark:text-secondary-dark transition-all before:transition-all before:duration-300 cursor-pointer overflow-hidden">
                <span className="relative z-10"><FontAwesomeIcon icon={faEnvelope} className='mr-1' /> email me</span>
            </a>
        </section>
    )
}

export default Contact
