import { useState, useEffect, useRef } from 'react';
import './Projects.scss';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const projectsRef = useRef(null);
  
  // Sample project data - replace with your actual projects
  const projectsData = [
    {
      id: 1,
      title: "Ebotto Learning App",
      category: ["App", "fullstack"],
      image: "/Images/projects/WhatsApp Image 2025-07-02 at 11.33.07 AM.jpeg",
      technologies: ["Dart", "Flutter", "Firebase", "Riverpod"],
      description: "Ebotto is a modern e-learning app built with Flutter, offering students easy access to courses, study materials, Zoom classes, and learning management tools.",
     
    },
    {
      id: 2,
      title: "Eagles",
      category: ["App", "fullstack"],
      image: "/Images/projects/WhatsApp Image 2025-07-02 at 11.37.37 AM.jpeg",
      technologies: ["Dart", "Flutter", "Firebase", "Riverpod"],
      description: "The Eagles Institute App Suite is a digital platform designed to support academic operations for CA, CMA, and ACCA coaching programs.",
     
    },
    {
      id: 3,
      title: "Yum Yard",
      category: ["App", "fullstack"],
      image: "/Images/projects/file cover - 1.png",
      technologies: ["Flutter", "Dart", "Firebase","Riverpod"],
      description: "YumYard is a food ordering app .",
      
    },
    {
      id: 4,
      title: "Coffee Shop",
      category: ["App", "fullstack"],
      image: "/Images/projects/coffiee.webp",
      technologies: ["Dart", "Flutter", "Riverpod", "Firestore", "Api"],
      description: "Developed a Flutter coffee shop app with integrated RESTful APIs and Firebase.",
      
    },
    {
      id: 5,
      title: "Car Hub",
      category: ["App", "fullstack"],
      image: "/Images/projects/CAR UI KIT 2022 (1).png",
      technologies: ["Dart", "Flutter", "Firebase", "Riverpod"],
      description: "Developed Car Hub, a Flutter-based used car selling app with integrated RESTful APIs and Firebase.",
     
    },
    
   
  ];
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category.includes(filter));
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    
    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <div className='ProjectsMainWrapper' id="projects" ref={projectsRef}>
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <div className="underline"></div>
          <p>Explore my recent work and creative solutions</p>
        </div>
        
        <div className="filter-tabs">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={filter === 'App' ? 'active' : ''} 
            onClick={() => setFilter('App')}
          >
            App Development
          </button>
          {/* <button 
            className={filter === 'ui-ux' ? 'active' : ''} 
            onClick={() => setFilter('ui-ux')}
          >
            UI/UX Design
          </button> */}
          <button 
            className={filter === 'fullstack' ? 'active' : ''} 
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                  <div className="action-buttons">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-link">
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.codeLink && (
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="code-link">
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="more-projects">
          <a href="https://github.com/anziltp" target="_blank" rel="noopener noreferrer" className="github-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            See More on GitHub
          </a>
        </div>
      </div>
      
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
    </div>
  );
};

export default Projects;