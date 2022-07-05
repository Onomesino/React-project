import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About_pizza from "./component/About_pizza";
import Pizza_type from "./component/Pizza_type";
import Footer from "./component/Footer";

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About_pizza title={"Pizza"}/>
    <Pizza_type title={"Pizza"}/>
    <Footer/>
    </>
  );
}

export default App;
