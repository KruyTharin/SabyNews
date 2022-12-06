import './App.css';
import Header from './component/Header';
import Navbar from './component/Navbar';
// import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Sport from './component/Sport';
import Video from './component/Video';
import Entertainment from './component/Entertainment';
import Footer from './component/Footer';
import Technology from './component/Technology';
import LifeAndSocial from './component/LifeAndSocial';
import SportsNews from './component/SportsNews';
import Deals from './component/Deals';



function App() {
  return (
    
    <>
        <Header/>
        <Navbar/>
        {/* <BrowserRouter>
            <Routes>
              <Route path="/Entertainment" element={<Entertainment/>} />
              <Route path="*" element={<h1>Route Not Found!</h1>} />
            </Routes>
      </BrowserRouter> */}
      <div className='md:container'>
        <Sport/> 
        <Video/>
        <Entertainment/>
        <Technology/>
        <LifeAndSocial/>
        <SportsNews/>
        <Deals/>
        {/* <Test/> */}
        {/* <PraticeCSS/> */}
      </div>
       <Footer/>
    </>
  );
}

export default App;
