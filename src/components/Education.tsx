import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Indian Institute of Technology',
      location: 'Bangalore, India',
      period: '2016 - 2020',
      grade: 'First Class with Distinction (8.5/10 CGPA)',
      description: 'Comprehensive computer science education with focus on software engineering, algorithms, and system design.',
      courses: ['Data Structures & Algorithms', 'Software Engineering', 'Database Systems', 'Operating Systems', 'Computer Networks']
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-SAA-123456'
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2022',
      credentialId: 'META-REACT-789'
    },
    {
      title: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: '2022',
      credentialId: 'GCP-PRO-456'
    },
    {
      title: 'MongoDB Developer Certification',
      issuer: 'MongoDB University',
      date: '2021',
      credentialId: 'MONGO-DEV-123'
    }
  ];

  const achievements = [
    'Dean\'s List for Academic Excellence (2018-2020)',
    'Winner - University Hackathon 2019',
    'Published research paper on Machine Learning applications',
    'President - Computer Science Student Association (2019-2020)'
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My educational background and professional certifications that form the foundation 
            of my technical expertise and continuous learning journey.
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
            Academic Background
          </h3>
          
          {education.map((edu, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                  <div className="text-lg text-blue-600 font-semibold mb-2">{edu.institution}</div>
                  <div className="flex items-center space-x-4 text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-md">
                  <div className="text-sm text-gray-600">Grade</div>
                  <div className="font-bold text-blue-600">{edu.grade}</div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{edu.description}</p>

              <div>
                <h5 className="font-semibold text-gray-900 mb-3">Key Courses:</h5>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full shadow-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="w-8 h-8 text-blue-600 mr-3" />
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h4>
                    <div className="text-blue-600 font-semibold mb-1">{cert.issuer}</div>
                    <div className="text-sm text-gray-600">{cert.date}</div>
                  </div>
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    <Award size={24} />
                  </div>
                </div>
                <div className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full inline-block">
                  ID: {cert.credentialId}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
            Academic Achievements
          </h3>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-blue-100">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;