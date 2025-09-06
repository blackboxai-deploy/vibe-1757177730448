"use client";

const Hero = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    const parent = target.parentElement;
    if (parent) {
      parent.innerHTML = '<div class="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-xl">YN</div>';
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-100 border-4 border-blue-600 overflow-hidden">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7683036f-efaf-4566-9f84-289ffaf893f3.png"
                alt="Professional headshot portrait"
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            Hi, I'm{" "}
            <span className="text-blue-600">Your Name</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-8 font-light">
            Full-Stack Software Developer
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions across the full development stack.
            Experienced in frontend, backend, DevOps, data science, and computer science fundamentals.
            Let's build something amazing together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-black text-black px-8 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition-colors"
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;