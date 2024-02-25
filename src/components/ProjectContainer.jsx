import propTypes from 'prop-types';
import A from './A';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareUpRight, faCircle } from '@fortawesome/free-solid-svg-icons';

const ProjectContainer = ({ project }) => {
    project
    return (
        <div className='space-y-3 shadow-[0_0px_50px_rgba(0,0,0,0.20)] p-10 text-center transition hover:-translate-y-2 duration-300'>
            <h3 className='font-bold text-3xl'>{project.name}</h3>

            <p className='opacity-90'>{project.description}</p>
            {project.stack && (
                <ul className='flex justify-center space-x-1 font-semibold text-sm'>
                    {project.stack.map((item, i) => (
                        <li key={i}>
                            <div className='flex justify-center items-center space-x-1'>
                                <div>
                                    {item}
                                </div>
                                {project.stack.length !== i + 1 && <FontAwesomeIcon className='opacity-40 text-[0.35rem] translate-y-0.5' icon={faCircle} />}
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            <div className='space-x-2 text-3xl'>
                {project.sourceCode && (
                    <A
                        href={project.sourceCode}
                        aria-label='source code'
                        className={'p-1'}
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </A>
                )}

                {project.demo && (
                    <A
                        href={project.demo}
                        aria-label='demo'
                        className={'p-1'}
                    >
                        <FontAwesomeIcon icon={faSquareUpRight} />
                    </A>
                )}
            </div>
        </div>
    );
}

ProjectContainer.propTypes = {
    project: propTypes.object.isRequired
}

export default ProjectContainer;
