import Banner from "../../components/Banner";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
};

export default Home;
