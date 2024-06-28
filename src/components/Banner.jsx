import { FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0, 0, 0, 0.3)), url("https://i.ibb.co/VWbtV5g/Designer.jpg")`,
        }}
        className="relative w-full bg-cover rounded-xl"
      >
        <div className="h-full text-white min-h-[calc(100vh-150px)] md:w-3/4 w-full flex flex-col p-4 md:p-0 md:pl-36 gap-6 justify-center">
          <h1 className="text-3xl md:text-5xl flex flex-col gap-2">
            {"Hi, I'm ASHIKUR RAHMAN ASHIK"}
            <span className="font-bold"> Web Developer</span>
          </h1>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://github.com/Md-Ashikur-Rahman-Ashik"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ashik2005" target="_blank">
              <FaLinkedin />
            </a>
          </div>
          <p className="w-full md:w-full lg:w-2/3">
            {
              "My passion for web development started with building a responsive clothing website. I've since tackled projects like a volunteer management system and a medical camp platform."
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
