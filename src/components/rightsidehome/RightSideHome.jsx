import "./rightSideHome.css"

const RightSideHome = () => {
  return (
    <div className="rightSide">
        
        <img className="profilepic" src="./mg4.jpg" alt="" />
        <h1>Michael Gibson</h1>
        
        <div className="skills">
        <div className="skill">
            <img src="./react.png" alt="" />
        </div>
        <div className="skill">
            <img src="./python.png" alt="" />
        </div>
        <div className="skill">
            <img src="./mongo.png" alt="" />
        </div>
        <div className="skill">
            <img src="./node.png" alt="" />
        </div>
        <div className="skill">
            <img src="./js.png" alt="" />
        </div>
        <div className="skill">
            <img src="./sql.svg" alt="" />
        </div>

        </div>
        
        
    </div>
  )
}

export default RightSideHome