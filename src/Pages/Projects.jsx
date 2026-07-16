import React, { useEffect, useRef } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

// Import images – adjust paths to match your actual file names
import homeHeroImg from '../assets/homehero.png'
import localChefImg from '../assets/localchefbazaar.png'
import teachLabImg from '../assets/teachlab.png'
import zapShiftImg from '../assets/zapShift.png'
import mangoDoneImg from '../assets/mangodone.png'

const projects = [
  {
    id: 1,
    title: 'HomeHero',
    description:
      'Connects homeowners with trusted local service providers for home repair and maintenance tasks.',
    tags: ['React', 'Firebase'],
    liveUrl: 'https://homehero-c5233.web.app/',
    image: homeHeroImg,
    bg: '#EAF3DE',
    ink: '#4C7A2E',
  },
  {
    id: 2,
    title: 'LocalChef Bazaar',
    description:
      'A marketplace for food lovers to connect with local chefs offering homemade meals and catering.',
    tags: ['React', 'Firebase'],
    liveUrl: 'https://localchefbazaar-f8bdd.web.app/',
    image: localChefImg,
    bg: '#FAEEDA',
    ink: '#B8791F',
  },
  {
    id: 3,
    title: 'TeachLab',
    description:
      'An interactive learning platform for students and teachers to collaborate and share educational resources.',
    tags: ['React', 'Firebase'],
    liveUrl: 'https://teachlab-b8fa1.web.app/',
    image: teachLabImg,
    bg: '#E6F1FB',
    ink: '#2E6DA4',
  },
  {
    id: 4,
    title: 'ZapShift',
    description:
      'A fast and reliable parcel delivery platform connecting senders with riders for seamless same-day deliveries.',
    tags: ['React', 'Firebase', 'Node.js', 'MongoDB'],
    liveUrl: 'https://zap-shift-recap-e467a.web.app/',
    image: zapShiftImg,
    bg: '#FDE8F0',
    ink: '#C23A72',
  },
  {
    id: 5,
    title: 'MangoDone',
    description:
      'An e-commerce platform for premium mangoes, featuring handpicked varieties, quality checks, and fast delivery.',
    tags: ['React', 'Firebase', 'Node.js', 'MongoDB'],
    liveUrl: 'https://mangodone.web.app',
    image: mangoDoneImg,
    bg: '#FFF3E0',
    ink: '#C97A1E',
  },
]

const ProjectRow = ({ project, index }) => {
  const rowRef = useRef(null)
  const isReversed = index % 2 === 1

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-12')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', triggerOnce: true }
    )

    if (rowRef.current) observer.observe(rowRef.current)
    return () => {
      if (rowRef.current) observer.unobserve(rowRef.current)
    }
  }, [])

  return (
    <div
      ref={rowRef}
      className="group relative opacity-0 translate-y-12 transition-all duration-700 ease-out
                 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center
                 py-12 border-b border-gray-200 dark:border-gray-800 last:border-b-0"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Index number watermark */}
      <span
        className="pointer-events-none select-none absolute -top-6 lg:-top-10 text-[5rem] lg:text-[7rem] font-black leading-none text-gray-900/5 dark:text-white/5"
        style={isReversed ? { right: 0 } : { left: 0 }}
        aria-hidden="true"
      >
        {String(project.id).padStart(2, '0')}
      </span>

      {/* Image */}
      <div
        className={`relative z-10 lg:col-span-7 ${
          isReversed ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl overflow-hidden aspect-[16/10] relative"
          style={{ backgroundColor: project.bg }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]"
            style={{ backgroundColor: `${project.bg}CC` }}
          >
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full bg-white shadow-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
              style={{ color: project.ink }}
            >
              View live site
              <FaExternalLinkAlt className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </div>
        </a>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 lg:col-span-5 ${
          isReversed ? 'lg:order-1 lg:text-right' : 'lg:order-2'
        }`}
      >
        <div
          className={`flex flex-wrap gap-2 mb-4 ${
            isReversed ? 'lg:justify-end' : ''
          }`}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-full font-semibold"
              style={{ backgroundColor: `${project.bg}80`, color: project.ink }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
          {project.title}
        </h3>

        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
          {project.description}
        </p>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white
                      relative after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-current
                      after:transition-all after:duration-300 after:w-full
                      hover:after:w-0`}
          style={{ color: project.ink }}
        >
          Visit project
          <FaExternalLinkAlt size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-3 font-medium">
              Selected Work
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              Featured Projects
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 max-w-xs md:text-right text-sm leading-relaxed">
            A collection of {projects.length} products I designed and shipped end to end —
            from idea to a live, working link.
          </p>
        </div>

        {/* Catalog list */}
        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects