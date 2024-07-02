import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";

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
          <ul className="md:flex justify-center items-center grid md:grid-cols-2 grid-cols-3 text-center gap-4 font-bold mb-4 text-5xl">
            <li>
              <FaHtml5 className="text-red-500" />
            </li>
            <li>
              <FaCss3 className="text-blue-500" />
            </li>
            <li>
              <SiJavascript className="text-yellow-500" />
            </li>
            <li>
              <FaReact className="text-blue-500" />
            </li>
            <li>
              <SiMongodb className="text-green-700" />
            </li>
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
