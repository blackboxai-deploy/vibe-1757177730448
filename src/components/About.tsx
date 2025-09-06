const About = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      skills: [
        "React", "Next.js", "TypeScript", "JavaScript", 
        "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Backend Development", 
      icon: "⚙️",
      skills: [
        "Node.js", "Express.js", "Python", "FastAPI",
        "RESTful APIs", "GraphQL", "MongoDB", "PostgreSQL"
      ],
      color: "bg-gray-50 border-gray-200"
    },
    {
      title: "DevOps & Cloud",
      icon: "☁️", 
      skills: [
        "Docker", "AWS", "Git", "GitHub Actions",
        "CI/CD", "Linux", "Nginx", "Monitoring"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Data Science",
      icon: "📊",
      skills: [
        "Python", "Pandas", "NumPy", "Jupyter",
        "Machine Learning", "Data Analysis", "Visualization", "Statistics"
      ],
      color: "bg-gray-50 border-gray-200"
    },
    {
      title: "Computer Science",
      icon: "🔬",
      skills: [
        "Algorithms", "Data Structures", "System Design", "Software Engineering",
        "Problem Solving", "Code Review", "Testing", "Documentation"
      ],
      color: "bg-blue-50 border-blue-200"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm a passionate full-stack developer with expertise across multiple domains.
              Here are the key areas where I excel and continuously grow.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border-2 ${category.color} hover:shadow-lg transition-shadow duration-300`}
              >
                {/* Category Header */}
                <div className="text-center mb-6">
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-black">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-white px-3 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:border-blue-300 hover:text-blue-700 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-black mb-4">
                My Development Philosophy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I believe in writing clean, maintainable code and following best practices.
                I'm passionate about staying up-to-date with the latest technologies while
                building scalable, user-focused solutions. Continuous learning and
                collaboration are at the heart of my development approach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;