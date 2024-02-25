import A from './A';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { about } from '../portfolio'

const About = () => {
    const { name, role, description, resume, social } = about

    return (
        <div className='flex flex-col items-center space-y-8 mt-16'>
            {name && (
                <h1 className='font-bold text-4xl md:text-6xl'>
                    Hi, I am <span className='text-secondary dark:text-secondary-dark'>{name}.</span>
                </h1>
            )}

            {role && <h2 className='font-bold text-4xl'>{role}</h2>}

            <p className='opacity-90 max-w-2xl text-lg'>{description && description}</p>

            <div className='flex flex-col items-center'>
                {social && (
                    <div className='space-x-2 text-3xl'>
                        {social.github && (
                            <A
                                href={social.github}
                                aria-label='github'
                                className='p-1'
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </A>
                        )}

                        {social.linkedin && (
                            <A
                                href={social.linkedin}
                                aria-label='linkedin'
                                className='p-1'
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </A>
                        )}
                    </div>
                )}

                {resume && (
                    <a
                        href={resume}
                        className="relative before:top-0 before:bottom-0 before:left-0 hover:before:left-0 before:z-0 before:absolute border-2 border-secondary dark:border-secondary-dark hover:before:bg-secondary dark:hover:before:bg-secondary-dark before:bg-secondary dark:before:bg-secondary-dark px-4 py-2 before:w-0 hover:before:w-full before:h-full text-secondary hover:text-background dark:hover:text-background-dark dark:text-secondary-dark transition-all before:transition-all before:duration-300 cursor-pointer overflow-hidden">
                        <span className="relative z-10">Resume</span>
                    </a>
                )}
            </div>
        </div>
    )
}

export default About;
