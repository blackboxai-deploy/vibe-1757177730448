"use client";

import { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNGM0Y0RjYiLz48dGV4dCB4PSIyMDAiIHk9IjE1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzlDQTNBRiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiPlByb2plY3QgSW1hZ2U8L3RleHQ+PC9zdmc+';
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI, secure payments, and admin dashboard. Built with scalable architecture and responsive design.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b29c6809-7f34-4dd2-ae3d-d9ab964ba0f5.png",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive data visualization platform with real-time analytics, custom charts, and automated reporting capabilities.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ee5fbe66-f14d-4243-bfc4-c97a59e1cf27.png",
      technologies: ["Python", "FastAPI", "React", "D3.js", "PostgreSQL", "Docker"],
      category: "Data Science",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and progress tracking.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/73173212-dfe7-4886-b649-7555e0c815e3.png",
      technologies: ["React", "TypeScript", "Express.js", "Socket.io", "MongoDB"],
      category: "Frontend",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "DevOps Automation Suite",
      description: "CI/CD pipeline automation with monitoring, logging, and deployment orchestration across multiple environments.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8ffc12b1-ac51-4124-91aa-f450654eac8d.png",
      technologies: ["Docker", "AWS", "GitHub Actions", "Terraform", "Kubernetes"],
      category: "DevOps",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Machine Learning API",
      description: "RESTful API for machine learning models with automated training, model versioning, and prediction endpoints.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b95b285f-7a8b-4fad-b09e-642e59522b08.png",
      technologies: ["Python", "FastAPI", "TensorFlow", "Docker", "AWS", "PostgreSQL"],
      category: "Data Science",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "Scalable chat application with real-time messaging, file sharing, and group management capabilities.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e593471e-cf67-4c27-8ddb-0a834e491475.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
      category: "Full Stack",
      liveDemo: "#",
      github: "#"
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Data Science", "DevOps"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "React": "bg-blue-100 text-blue-800",
      "Next.js": "bg-black text-white",
      "TypeScript": "bg-blue-600 text-white",
      "JavaScript": "bg-yellow-100 text-yellow-800",
      "Node.js": "bg-green-100 text-green-800",
      "Python": "bg-blue-100 text-blue-800",
      "MongoDB": "bg-green-600 text-white",
      "PostgreSQL": "bg-blue-700 text-white",
      "Docker": "bg-blue-500 text-white",
      "AWS": "bg-orange-100 text-orange-800",
      "FastAPI": "bg-teal-100 text-teal-800",
      "Express.js": "bg-gray-100 text-gray-800",
      "Socket.io": "bg-black text-white",
      "TensorFlow": "bg-orange-500 text-white",
      "Redis": "bg-red-100 text-red-800",
      "Stripe": "bg-purple-100 text-purple-800",
      "D3.js": "bg-orange-100 text-orange-800",
      "GitHub Actions": "bg-gray-800 text-white",
      "Terraform": "bg-purple-600 text-white",
      "Kubernetes": "bg-blue-600 text-white"
    };
    return colors[tech] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              My Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here's a showcase of my recent software development projects across various technologies and domains.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Project Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={handleImageError}
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 text-xs font-medium rounded ${getTechColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveDemo}
                      className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 text-center border border-black text-black px-4 py-2 rounded hover:bg-black hover:text-white transition-colors text-sm font-medium"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;