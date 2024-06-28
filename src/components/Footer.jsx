import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black mt-20">
      <footer className="footer container mx-auto footer-center  text-white rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Projects</a>
        </nav>
        <nav>
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
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
