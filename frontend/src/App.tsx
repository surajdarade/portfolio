import { About, Footer, Header, Skills, Project } from "./container";
import { Navbar } from "./components";
import { Toaster } from "react-hot-toast";

import "./App.scss";

const App = () => {
  return (
    <>
      <Toaster />
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Project />
        <Skills />
        <Footer />
      </div>
    </>
  );
};

export default App;
