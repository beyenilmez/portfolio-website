const sections = [
    'projects', 'contributions', 'skills', 'contact'
]

const about = {
    name: 'Bedirhan Yenilmez',
    role: 'A computer enthusiast.',
    description: undefined,
    resume: undefined,
    social: {
        linkedin: 'https://www.linkedin.com/in/bedirhan-yenilmez',
        github: 'https://github.com/beyenilmez',
    },
}

const projects = [
    {
        name: 'Gradeful',
        description:
            'A grade tracker to monitor your progress throughout your university education.',
        stack: ['React', 'TailwindCSS'],
        sourceCode: 'https://github.com/beyenilmez/gradeful',
        demo: 'https://beyenilmez.github.io/gradeful/'
    }
]

const contributions = [
    {
        name: 'WinWidgets',
        description:
            'WinWidgets is a platform for Windows 10/11 Desktop Widget development using HTML, CSS, and JavaScript. Create your own widgets using frontend technologies based on the Chromium project.',
        stack: ['C#', 'CefSharp', 'JavaScript'],
        sourceCode: 'https://github.com/beyluta/WinWidgets'
    }
]

const skills = [
    'Java',
    'C#',
    'Python',
    'JavaScript',
    'Git',
    'React',
    'CI/CD'
]

const contact = {
    email: 'yenilmezbedirhan@gmail.com',
}

const repository = 'https://github.com/beyenilmez/portfolio-website'

export { sections, about, projects, contributions, skills, contact, repository }
