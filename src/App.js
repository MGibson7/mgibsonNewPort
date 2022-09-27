import Home from "./pages/home/Home";
import ProjectOne from "./pages/projectone/ProjectOne";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ProjectTwo from "./pages/projecttwo/ProjectTwo";
import ProjectThree from "./pages/projectthree/ProjectThree";
import ProjectFour from "./pages/projectfour/ProjectFour";
import ProjectFive from "./pages/projectfive/ProjectFive";
import Referral from "./pages/referrals/Referral";
import Resume from "./pages/resume/Resume";
import Youtube from "./pages/youtube/Youtube";
import ProjectSix from "./pages/projectsix/ProjectSix";
import LinkedIn from "./pages/linkedin/LinkedIn";


function App() {
  return (
    <>
  
  <Router>
    <Routes>
    <Route exact path="/" element = { <Home />}/>
     <Route exact path="/projectOne" element = { <ProjectOne/>}/>
     <Route exact path="/projectTwo" element = { <ProjectTwo/>}/>
     <Route exact path="/projectThree" element = { <ProjectThree/>}/>
     <Route exact path="/projectFour" element = { <ProjectFour/>}/>
     <Route exact path="/projectFive" element = { <ProjectFive/>}/>
     <Route exact path="/projectSix" element = { <ProjectSix/>}/>
     <Route exact path="/referrals" element = { <Referral/>}/>
     <Route exact path="/resume" element = { <Resume/>}/>
     <Route exact path="/youtube" element = { <Youtube/>}/>
     <Route exact path="/linkedin" element = { <LinkedIn/>}/>
     

    
    

    </Routes>
    
     

  </Router>
  </>

  );
}

export default App;
