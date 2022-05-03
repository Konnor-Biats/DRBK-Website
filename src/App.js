import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef, useState, useEffect } from "react";
import 'locomotive-scroll/dist/locomotive-scroll.css'

import Home from "./sections/Home";
import About from "./sections/About";
import Productions from "./sections/Productions";
import Loader from "./components/Loader";
import { AnimatePresence } from "framer-motion";
import Available from "./sections/Available";
import Upcoming from "./sections/Upcoming";
import Footer from "./sections/Footer";

function App() {
  
  const containerRef = useRef(null)
  
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
   setTimeout(() => {
     setLoaded(true);
    
   }, 3000); 
  }, [])
  
  

  return (
    <>
    <GlobalStyles />
    
    <ThemeProvider theme={dark} >
    
    <LocomotiveScrollProvider
        options={{
          smooth: true,
          // ... all available Locomotive Scroll instance options 

          smartphone:{
            smooth: true,
          },
          tablet:{
            smooth: true,
          }

        }}
        watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >

      <AnimatePresence>
        {loaded ? null : <Loader/>}
      </AnimatePresence>

      <AnimatePresence>
        <main data-scroll-container ref={containerRef}>
          <Home />
          <About />
          <Productions />
          <Available />
          <Upcoming />
          <Footer />   
        </main>
      </AnimatePresence>
      
    </LocomotiveScrollProvider>
  </ThemeProvider>
  </>
  );
}

export default App;
