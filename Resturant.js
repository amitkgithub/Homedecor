import React, { useState } from "react";
import Menu from "./Menu";
import Men from "./Men";
import Contact from "./Contact"

const Resturant = () => {
  const [menData, setMenData] = useState(Men);
  const [isContact, setIsContact] = useState(true);      
//   empty vallue is 0 true is 1 
  // console.log(menData);
  // console.log(setMenData);
  const filitering = (category) => {setIsContact(true);                                                                    
    const updatefilitering = Men.filter((curElem) => {
      return curElem.category ===category;
    });                                                                                                                                                                       
    setMenData(updatefilitering);  
         
  };
  const contact = () => {
    setIsContact(false);
   };
  const all=()=>{
     const a= setMenData(Men)                                   
  console.log(a);
    }    


  return (
    <> 
    <h1 className="h1"> Welcome In Home Decor </h1>
      {/* <div className="navvi">
        <h1> Welcome In Home Decor </h1>
      </div> */}
      {/* <br /> */}
      <nav className=" navbar">
        <div className="btnnav">
          <button className="btn b1" onClick={() =>all()}>ALL</button>
          <button className="btn b2" onClick={() => filitering("basin")}>BASIN</button>
          <button className="btn b3" onClick={() => filitering("tap")}>TAP</button>
          <button className="btn b4" onClick={() => filitering("tile")}>TILE</button>
          <button className="btn b5" onClick={() => contact()}>Contact Us</button>
        </div>
      </nav>
      {/* <Menu menData={menData} /> */}
        {isContact ? <Menu menData={menData} /> : <Contact/>}
      
    </>
  );
};

export default Resturant;