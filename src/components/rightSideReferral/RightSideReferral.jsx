
import "./rightSideReferral.css"
import SimpleImageSlider from "react-simple-image-slider";

const RightSideReferral = () => {
  const images = [
    { url: "ref.jpg" },
    { url: "ref2.jpg" },
    { url: "ref3.jpg" },
  ];
  const width = "30%";
  const height = "30%";
  
  
  return (
    <div className = "rightSide">

      
      <div className="simpleImageSlide">
      <SimpleImageSlider 
      className = "simpleImage"
        width={width}
        height={height}
        images={images}
        showBullets={false}
        showNavs={false}
        loop = {true}
        autoPlay = {true}
        slideDuration = {4.5}
      />

      </div>
      

    
      
    
      
    </div>
  )
}

export default RightSideReferral