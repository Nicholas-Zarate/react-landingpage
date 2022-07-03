import './Index.css';
import HeroSection from '../Components/HeroSection/HeroSection.js';
import Nav from '../Components/Nav/Nav';
import Contact from '../Components/Contact/Contact'
import React, { useRef } from "react";

//import image
import homeimg from '../public/Demoscreen4.png';
import apiimg from '../public/api-ex.png';
import frontfacing from '../public/front-facing.png';
import modules from '../public/module_news.png';

export default function Index() {
  const betaRef = useRef();

  function handleClick() {
    betaRef.current.scrollIntoView({behavior: "smooth"});
  }

  return(
    <div>
      <Nav/>
      <div className="page" id="home">
        <HeroSection
          title="Digital signage and dashboarding  all-in-one"
          desc="Display your workflow notifications as they come. Low latency information when you need it as you need without cluttering your viewspace. Select-configure-deploy your modules in an instanct. A viewport into your world, the way you want it"
          cta="START NOW"
          img={homeimg}
          imgID="imghome"
          />
      </div>
      <div className="pageB">
        <HeroSection
          varient=""
          title="Display real-world data"
          list="true"
          desc1="Weather Integration  "
          desc2="News Headlines and Alerts"
          desc3="Fin and Crypto Markets"
          cta="Learn more"
          img={modules}
          imgID="imgmodules"
          />
      </div>
      <div className="page">
        <HeroSection
          varient="switch"
          title="viewer and consumer centered workflows and informatics"
          desc="Office lobbies, waiting rooms, stadiums. Show what you want, when you want it."
          cta="Learn more"
          cta2="CREATE YOUR OWN"
          img={frontfacing}
          imgID="imgfront"
          />
      </div>
      <div className="pageB">
        <HeroSection
          varient="switch"
          title="Integrate your favorite workflows"
          desc=""
          cta="Learn more"
          img={apiimg}
          imgID="imgapi"
          />
      </div>
      <div ref={betaRef} className="page">
        <HeroSection
        varient="single"
        cta="Join now"
        title="JOIN OUR BETA"
        desc="Reserve your spot today"
        />
      </div>
    </div>
  )
}
