import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'HomeHero',
    description:
      'Connects homeowners with trusted local service providers for home repair and maintenance tasks.',
    tags: ['React', 'Firebase'],
    liveUrl: 'https://homehero-c5233.web.app/',
    icon: '🏠',
    bg: '#EAF3DE',
  },
  {
    id: 2,
    title: 'LocalChef Bazaar',
    description:
      'A marketplace for food lovers to connect with local chefs offering homemade meals and catering.',
    tags: ['React', 'Firebase'],
    liveUrl: 'https://localchefbazaar-f8bdd.web.app/',
    icon: '👨‍🍳',
    bg: '#FAEEDA',
  },
  {
    id: 3,
    title: 'TeachLab',
    description:
      'An interactive learning platform for students and teachers to collaborate and share educational resources.',
    tags: ['React', 'Firebase'],
    liveUrl: 'https://teachlab-b8fa1.web.app/',
    icon: '📚',
    bg: '#E6F1FB',
  },
  {
    id: 4,
    title: 'ZapShift',
    description:
      'A fast and reliable parcel delivery platform connecting senders with riders for seamless same-day deliveries.',
    tags: ['React', 'Firebase', 'Node.js', 'MongoDB'],
    liveUrl: 'https://zap-shift-recap-e467a.web.app/',
    icon: '🚚',
    bg: '#FDE8F0',
  },
]

const ProjectCard = ({ project }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:-translate-y-1 hover:border-gray-400 transition-all duration-200 bg-white dark:bg-gray-800">
      <div
        className="h-36 flex items-center justify-center text-5xl"
        style={{ backgroundColor: project.bg }}
      >
        {project.icon}
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
          {project.title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
          {project.description}
        </p>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-green-600 inline-block"></span>
          Live Demo
          <FaExternalLinkAlt size={10} />
        </a>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <p className="text-xs tracking-widest uppercase text-gray-400 mb-1">Portfolio</p>
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-1">
        Featured Projects
      </h2>
      <p className="text-gray-500 mb-10">Some works I have built</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Projects