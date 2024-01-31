

const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React'];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="flex flex-wrap">
        {skills.map((skill) => (
          <li key={skill} className="bg-blue-500 text-white px-3 py-1 m-1 rounded">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
