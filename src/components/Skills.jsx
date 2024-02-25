import SkillContainer from './SkillContainer'

import { skills } from '../portfolio'

const Skills = () => {
    if (!skills.length) return null

    return (
        <section id='skills' className='flex flex-col justify-center mt-8 pt-8'>
            <h2 className='mb-10 font-bold text-4xl text-center uppercase'>Skills</h2>

            <div className='flex justify-center'>
                <div className='flex flex-wrap justify-center max-w-lg'>
                    {skills.map((skill, i) => (
                        <div key={i}>
                            <SkillContainer skill={skill} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
