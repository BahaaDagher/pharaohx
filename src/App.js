import 'bootstrap/dist/css/bootstrap.min.css' ; 
import 'bootstrap/dist/js/bootstrap.min.js' ; 
import Navbar from './components/mainComponents/Navbar';
import Header from './components/mainComponents/Header';
import Missions from './components/mainComponents/Missions';
import Utility from './components/mainComponents/Utility';
import RoadMap from './components/mainComponents/RoadMap';
import RoadMapSlider from './components/RoadMapSlider';
import ImageSlider from './components/mainComponents/ImageSlider';
import FAQ from './components/mainComponents/FAQ';
import Footer from './components/mainComponents/Footer';
import { Element } from 'react-scroll';
import { useEffect } from 'react';
function App() {
  // useEffect(() => {
  //   const preventContextMenu = (e) => {
  //     e.preventDefault();
  //   };

  //   window.addEventListener('contextmenu', preventContextMenu);

  //   return () => {
  //     window.removeEventListener('contextmenu', preventContextMenu);
  //   };
  // }, []);

  // // Prevent developer tools shortcuts
  // useEffect(() => {
  //   const preventDevToolsShortcuts = (e) => {
  //     if ((e.ctrlKey && e.shiftKey && e.keyCode === 73) ||   // Ctrl+Shift+I
  //         (e.ctrlKey && e.shiftKey && e.keyCode === 74) ||   // Ctrl+Shift+J
  //         (e.keyCode === 123)) {                              // F12
  //       e.preventDefault();
  //     }
  //   };

  //   window.addEventListener('keydown', preventDevToolsShortcuts);

  //   return () => {
  //     window.removeEventListener('keydown', preventDevToolsShortcuts);
  //   };
  // }, []);

  return (
    <>
      <Navbar/>
      <Header/>
      <Missions/>
      <Utility/>
      <RoadMapSlider/>
      <RoadMap/>
      <ImageSlider/>
      <FAQ/>
      <Footer  />
      {/* <Footer/> */}
    </>
  );
}

export default App;
