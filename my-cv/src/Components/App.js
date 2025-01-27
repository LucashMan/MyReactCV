import React from "react";
import Banner from "./Banner";
import MyCv from "./MyCv";
import ContactForm from "./Contactform";
import Projets from "./Projets";
import Hobbys from "./Hobbys";
import Footer from "./Footer";



function App() {
  return (
    <div>
      <Banner />
      <MyCv />
      <Projets />
      <Hobbys />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
