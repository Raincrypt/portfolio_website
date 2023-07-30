import Header from "./components/navbar/Header"
import Home from "./components/home/Home"
import Work from "./components/work/Work"
import Timeline from "./components/timeline/Timeline";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Work/>
      <Timeline/>
      <Services/>
      <Contact/>
      <Footer/>
      <Toaster/>
    </>
  );
}

export default App;