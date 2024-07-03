import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiMongodb } from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      projectName: "Fabric Fusion",
      technologies: [
        <FaHtml5 className="text-red-500" key={"html"} />,
        <FaCss3 className="text-blue-500" key={"css3"} />,
        <RiTailwindCssFill className="text-blue-500" key={"tailwindCss"} />,
        <SiJavascript className="text-yellow-500" key={"javascript"} />,
        <FaReact className="text-blue-500" key={"reactJS"} />,
        <FaNodeJs className="text-green-500" key={"nodeJS"} />,
        <SiMongodb className="text-green-700" key={"mongoDB"} />,
      ],
      description:
        "I developed the Fabric Fusion Website, a web application for textile art enthusiasts to browse a curated gallery, create and manage their own projects, and potentially share their creations with the community. This project enhanced my front-end skills and provided valuable experience in integrating front-end and back-end technologies.",
      liveLink: "https://fabric-fusion-assignment-ten.web.app",
      photo: "https://i.ibb.co/c2fPkC1/assignment-Ten-Reduced.png",
    },
    {
      projectName: "ActifyNow",
      technologies: [
        <FaHtml5 className="text-red-500" key={"html"} />,
        <FaCss3 className="text-blue-500" key={"css3"} />,
        <RiTailwindCssFill className="text-blue-500" key={"tailwindCss"} />,
        <SiJavascript className="text-yellow-500" key={"javascript"} />,
        <FaReact className="text-blue-500" key={"reactJS"} />,
        <FaNodeJs className="text-green-500" key={"nodeJS"} />,
        <SiMongodb className="text-green-700" key={"mongoDB"} />,
      ],
      description:
        "I created ActifyNow, a Volunteer Management Website designed to connect volunteers with meaningful opportunities, fostering community growth through volunteer work. This platform enables users to easily find and participate in various activities, such as environmental conservation, social outreach, and educational initiatives, promoting both personal development and community improvement.",
      liveLink: "https://actifynow-bd532.web.app",
      photo: "https://i.ibb.co/5jxhtdY/assignment-Eleven-Reduced.png",
    },
    {
      projectName: "CampMed",
      technologies: [
        <FaHtml5 className="text-red-500" key={"html"} />,
        <FaCss3 className="text-blue-500" key={"css3"} />,
        <RiTailwindCssFill className="text-blue-500" key={"tailwindCss"} />,
        <SiJavascript className="text-yellow-500" key={"javascript"} />,
        <FaReact className="text-blue-500" key={"reactJS"} />,
        <FaNodeJs className="text-green-500" key={"nodeJS"} />,
        <SiMongodb className="text-green-700" key={"mongoDB"} />,
      ],
      description:
        "As the sole developer of CampMed, I designed and built a comprehensive web solution to streamline the management of medical camps, facilitating scheduling, volunteer registration, and resource tracking. CampMed has reduced administrative burdens and improved the overall experience for volunteers and organizers, with future plans for additional features and mobile support.",
      liveLink: "https://camp-med.web.app/",
      photo: "https://i.ibb.co/k1t0ndc/assignment-Twelve-Reduced.png",
    },
  ];

  return (
    <div id="projects" className="container mx-auto mt-20 md:p-8">
      <h2 className="text-center text-3xl font-bold mb-10">My Projects</h2>
      <div>
        {projects.map((project) => (
          <div
            className="flex flex-col md:flex-col lg:flex-row gap-10 justify-center items-center mb-10"
            key={project.projectName}
          >
            <div className="md:w-2/3 w-full p-4 md:p-0">
              <h2 className="text-2xl md:text-center lg:text-left font-bold mb-4">
                {project.projectName}
              </h2>
              <ul className="grid grid-cols-7">
                {project.technologies.map((technology, index) => (
                  <li className="text-4xl" key={index}>
                    {technology}
                  </li>
                ))}
              </ul>
              <p className="mt-4">{project.description}</p>
              <div className="flex justify-center mt-4">
                <a
                  href={project.liveLink}
                  className="btn hover:scale-105 transition-transform bg-black text-white hover:bg-black"
                  target="_blank"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="w-full md:2/3">
              <img
                src={project.photo}
                alt={project.projectName}
                className="rounded-xl hover:scale-105 transition-transform"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
