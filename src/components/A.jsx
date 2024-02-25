import propTypes from 'prop-types';

const NavLink = ({ children, onClick, href, className }) => {
    return (
        <a
            type="button"
            href={href}
            className={`relative after:right-full after:bottom-0 after:absolute after:bg-secondary dark:after:bg-secondary-dark after:rounded-full after:w-full after:h-[3px] font-semibold text-primary hover:text-secondary dark:hover:text-secondary-dark dark:text-primary-dark hover:after:translate-x-full duration-300 after:duration-300 cursor-pointer overflow-hidden
            ${className}`}
            onClick={onClick}
        >
            {children}
        </a>
    );
}

NavLink.propTypes = {
    children: propTypes.node.isRequired,
    onClick: propTypes.func,
    href: propTypes.string,
    className: propTypes.string
}

export default NavLink;