import Banner from "../../components/Banner";
import Chat from "../../components/Chat";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Chat></Chat>
    </div>
  );
};

export default Home;
