const Skills = () => {
  return (
    <div className="container mx-auto mt-20">
      <h2 className="text-center text-3xl font-bold">My Skills</h2>
      <div className="flex justify-center mt-10 items-center">
        <div>
          <img
            src="https://i.ibb.co/86rV1Jd/profile-Picture.jpg"
            alt="Profile-Picture"
            className="rounded-xl w-1/3"
          />
        </div>
        <div>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
