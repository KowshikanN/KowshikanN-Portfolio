import ButtonGradient from "./assets/svg/ButtonGradient";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Main />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
