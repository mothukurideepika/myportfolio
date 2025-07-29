import React, { useState } from 'react';
import { Calendar, Building, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const Experience: React.FC = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(0);

  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'Tech Solutions Inc.',
      location: 'Bangalore, India',
      period: '2023 - Present',
      type: 'Full-time',
      description: 'Leading frontend development initiatives and mentoring junior developers in modern web technologies.',
      achievements: [
        'Led the development of a customer portal that increased user engagement by 40%',
        'Implemented automated testing strategies that reduced bugs in production by 35%',
        'Mentored 3 junior developers and conducted technical interviews',
        'Optimized application performance resulting in 50% faster load times'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'MongoDB']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      location: 'Bangalore, India',
      period: '2021 - 2023',
      type: 'Full-time',
      description: 'Developed and maintained multiple web applications using modern JavaScript frameworks and cloud technologies.',
      achievements: [
        'Built and deployed 8+ production applications serving 10k+ users',
        'Collaborated with cross-functional teams to deliver projects on time',
        'Implemented responsive designs that improved mobile user experience by 60%',
        'Integrated third-party APIs and payment gateways for e-commerce solutions'
      ],
      technologies: ['React', 'Vue.js', 'Express.js', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Junior Web Developer',
      company: 'StartupXYZ',
      location: 'Bangalore, India',
      period: '2020 - 2021',
      type: 'Full-time',
      description: 'Started my professional journey building responsive websites and learning modern development practices.',
      achievements: [
        'Developed responsive websites using HTML, CSS, and JavaScript',
        'Participated in code reviews and learned industry best practices',
        'Contributed to the company\'s main product used by 5k+ customers',
        'Gained experience with version control and agile development methodologies'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'MySQL']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My professional journey showcasing growth, achievements, and the impact I've made 
            across different organizations and projects.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform md:-translate-x-0.5"></div>

          {experiences.map((job, index) => (
            <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform md:-translate-x-2 shadow-lg"></div>

              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 text-sm text-blue-600 mb-2">
                      <Calendar size={16} />
                      <span>{job.period}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <Building size={16} />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{job.description}</p>
                  </div>

                  {/* Expandable content */}
                  <div className="border-t pt-4">
                    <button
                      onClick={() => setExpandedJob(expandedJob === index ? null : index)}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                      <span>
                        {expandedJob === index ? 'Hide Details' : 'Show Details'}
                      </span>
                      {expandedJob === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {expandedJob === index && (
                      <div className="mt-4 space-y-4 animate-fade-in">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {job.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start space-x-2 text-gray-700">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;