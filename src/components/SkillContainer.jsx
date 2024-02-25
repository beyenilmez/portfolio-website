import propTypes from 'prop-types';

const SkillContainer = ({ skill }) => {
    return (
        <div className='shadow-[0_4px_10px_rgba(0,0,0,0.20)] m-2 px-4 py-3 font-semibold text-center hover:-translate-y-1 duration-300 cursor-pointer'>
            {skill}
        </div>
    );
};

SkillContainer.propTypes = {
    skill: propTypes.node.isRequired
}

export default SkillContainer;