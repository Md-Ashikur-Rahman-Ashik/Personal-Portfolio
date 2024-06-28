const Skills = () => {
  return (
    <div className="container mx-auto mt-20 p-2 md:p-0">
      <h2 className="text-center text-3xl font-bold">My Skills</h2>
      <div className="flex justify-center mt-10 items-center gap-10">
        <div className="md:w-1/4 w-1/2">
          <img
            src="https://i.ibb.co/86rV1Jd/profile-Picture.jpg"
            alt="Profile-Picture"
            className="rounded-xl"
          />
        </div>
        <div className="w-1/2">
          <ul className="md:flex grid grid-cols-2 text-center gap-4 font-bold mb-4">
            <li className="border-2 p-2 rounded-xl">HTML5</li>
            <li className="border-2 p-2 rounded-xl">CSS3</li>
            <li className="border-2 p-2 rounded-xl">Javascript</li>
            <li className="border-2 p-2 rounded-xl">React JS</li>
            <li className="border-2 p-2 rounded-xl">MongoDB</li>
          </ul>
          <div>
            {
              "I started my web development journey in 2023. I'm passionate about frontend technologies and enjoy creating intuitive, visually appealing user experiences."
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
