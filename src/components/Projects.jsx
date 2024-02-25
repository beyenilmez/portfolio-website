import ProjectContainer from './ProjectContainer'
import { projects } from '../portfolio'

const Projects = () => {
    if (!projects.length) return null

    return (
        <section id='projects' className='flex flex-col justify-center mt-8 pt-8'>
            <h2 className='mb-10 font-bold text-4xl text-center'>Projects</h2>

            <div className='flex justify-center'>
                <div className='gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl'>
                    {projects.map((project, i) => (
                        <ProjectContainer key={i} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
