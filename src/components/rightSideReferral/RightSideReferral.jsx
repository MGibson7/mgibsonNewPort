
import "./rightSideReferral.css"
import {motion} from 'framer-motion';
import {useRef, useEffect, useState} from "react";

const RightSideReferral = () => {
    const imgArray = ["./ref.jpg", "/ref2.jpg", "/ref3.jpg"]
    const [width, setWidth] = useState(0);
    const carouselDiv = useRef();
    

    useEffect(()=>{
        setWidth(carouselDiv.current.scrollWidth - carouselDiv.current.offsetWidth);
        if(width === 0){
            setWidth(1000);

        }


    },[width]);

  return (
    <>
    <div className="rightSide">
    <motion.div ref={carouselDiv} className="carousel">
        <motion.div initial={{x: 0}} drag="x" dragConstraints ={{right:0, left: -width}} whileTap = {{cursor: "grabbing"}}
  animate={{x: -width}}
  transition={{x: {repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear"}}}   
          className="inner-carousel">
            {imgArray.map(image=>{
                return(
                    <motion.div className = "item" key={image}>
                        <img src={image}  alt = ""/>
                    </motion.div>
                )
            })}


        </motion.div>

    </motion.div>
    </div>
    </>
  )
          }

export default RightSideReferral