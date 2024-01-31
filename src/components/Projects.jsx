

const Projects = () => {
  const dummyProjects = [
    { id: 1, title: 'Project 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Project 2', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.' },
    { id: 3, title: 'Project 3', description: 'Excepteur sint occaecat cupidatat non proident.' },
    { id: 4, title: 'Project 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 5, title: 'Project 5', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <ul>
        {dummyProjects.map((project) => (
          <li key={project.id} className="mb-2">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
