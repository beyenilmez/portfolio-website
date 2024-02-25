import A from './A';

import { repository } from '../portfolio';

const Footer = () => (
    <footer className='mt-16 py-12 w-full text-center'>
        <A
            className={'text-secondary dark:text-secondary-dark font-bold'}
            href={repository}
        >
            Created By Bedirhan Yenilmez
        </A>
    </footer>
)

export default Footer
