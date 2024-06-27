const Projects = () => {
  const projects = [
    {
      projectName: "Fabric Fusion",
      technologies: [
        "HTML5, CSS3, Tailwind Css, Javascript, React Js, Express Js, Node Js, MongoDB",
      ],
      description:
        "I developed the Fabric Fusion Website, a web application for textile art enthusiasts to browse a curated gallery, create and manage their own projects, and potentially share their creations with the community. This project enhanced my front-end skills and provided valuable experience in integrating front-end and back-end technologies.",
      liveLink: "https://fabric-fusion-assignment-ten.web.app",
      photo: "https://i.ibb.co/c2fPkC1/assignment-Ten-Reduced.png",
    },
    {
      projectName: "ActifyNow",
      technologies: [
        "HTML5, CSS3, Tailwind Css, Javascript, React Js, Express Js, Node Js, MongoDB",
      ],
      description:
        "I created ActifyNow, a Volunteer Management Website designed to connect volunteers with meaningful opportunities, fostering community growth through volunteer work. This platform enables users to easily find and participate in various activities, such as environmental conservation, social outreach, and educational initiatives, promoting both personal development and community improvement.",
      liveLink: "https://actifynow-bd532.web.app",
      photo: "https://i.ibb.co/5jxhtdY/assignment-Eleven-Reduced.png",
    },
    {
      projectName: "CampMed",
      technologies: [
        "HTML5, CSS3, Tailwind Css, Javascript, React Js, Express Js, Node Js, MongoDB",
      ],
      description:
        "As the sole developer of CampMed, I designed and built a comprehensive web solution to streamline the management of medical camps, facilitating scheduling, volunteer registration, and resource tracking. CampMed has reduced administrative burdens and improved the overall experience for volunteers and organizers, with future plans for additional features and mobile support.",
      liveLink: "https://camp-med.web.app/",
      photo: "https://i.ibb.co/k1t0ndc/assignment-Twelve-Reduced.png",
    },
  ];

  return (
    <div className="container mx-auto mt-20">
      <h2 className="text-center text-3xl font-bold mb-10">My Projects</h2>
      <div>
        {projects.map((project) => (
          <div
            className="flex justify-center items-center mb-10"
            key={project.projectName}
          >
            <div>
              <h2 className="text-2xl">{project.projectName}</h2>
            </div>
            <div className="w-1/3">
              <img src={project.photo} alt={project.projectName} className="rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
