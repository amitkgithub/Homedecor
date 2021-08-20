import React from 'react'
import "./sstyle.css"

const Menu = ({menData}) => {
    return (
    <>
    <section className="maincardcontainer">
        {menData.map((curElem)=>{
            console.log(curElem);
            return(
                <>
               
                <div className=" card" key={curElem}>
                    <div className="cardc" style={{background:""} } key={curElem}>
                        <div className="cardbody" style={{background:""}} key={curElem}>
                            <span className='cardnumber'  style={{background:"yellow"}}key={curElem}>{curElem.id}</span>
                            <span className='cardauthor' key={curElem}> {curElem.category}</span>
                            <h1 className='cardtitle' key={curElem}> {curElem.name}</h1>
                            <img  className=" images" src={curElem.image} alt=" img"/><br/>
                            <span className='description'> {curElem.description}</span>
                            <div className='price'>Price-{curElem.price}</div>
                            <span className='cardtag'> <button className='orderbtn'>order now</button></span>
                        </div>
                    </div>
                </div>
                
                 </>
            )
        })}
        </section>
      </>
    )
}

export default Menu;
