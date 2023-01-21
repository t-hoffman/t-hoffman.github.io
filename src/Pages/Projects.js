import React, { useEffect, useState } from 'react'
import '../css/Projects.css'

const Projects = () => {
  const [projects, setProjects] = useState(null);
  
  const getProjectData = async () => {
      const response = await fetch('./projects.json');
      const data = await response.json();
      setProjects(data);
  };

  useEffect(() => {
      getProjectData()
  }, []);

  const loaded = () => {
    return projects.map((project, pidx) => (
      <div key={pidx}>
        <div><h2 className="smaller-h2">{project.name}</h2></div>
        <div className="projects">
          <div className="left">
            <div className="images">
            {
              project.image.map((img, idx) => {
                  return <div key={idx}><img src={img} height="450px" alt={project.name} /></div>
              })
            }
            </div>
          </div>
          <div className="right">
            <div className="buttons">
            <a href={project.git}>
            <button>GitHub</button>
            </a>
            {
              project.live.map((live, idx) => {
                return (
                  <a href={live} key={idx}>
                  <button>Live Site</button>
                  </a>
                )
              })
            }
            </div>
          </div>
        </div>
      </div>
    ));
  };    

  return projects ? loaded() : <h2>Loading ...</h2>
}

export default Projects
