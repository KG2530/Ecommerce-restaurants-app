import React, { useState } from 'react'
import './style.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardsData from "./CardData";

const Home = () => {
 const [cartData,setCartData] = useState(CardsData);
  return (
    <>
        <section className='item_section mt-4 container'>
          <h2 className='px-4' style={{fontWeight:400}}>My Restaurants in Mumbai open Now</h2>
          <div className='row mt-2 d-flex justify-content-around align-items-center'> 
            {
              cartData.map((element,index)=>{
                return(
                  <>

                    <Card style={{width:"22rem",border:"none"}} className='hove mb-4'>
                        <Card.Img varient="top" className="cd" src={element.imgdata}/>
                        <div className='card_body'> 
                            <div className='upper_date d-flex justify-content-between align-items-center'> 
                              <h4 className='mt-2'> {element.dish} </h4>
                              <span>  {element.rating} </span>
                            </div>
                            <div className='lower_date d-flex justify-content-between'> 
                              <h5>{element.address} </h5>
                              <span> {element.price} </span>
                            </div>
                            <div className='extra'>
                            <div className='last_date d-flex justify-content-between align-items-center'> 
                            <img style={{width: "20px"}} src={element.arrimg} className='limg' alt="" />
                            <button style={{width:"150px",background:"#ff5038db", border:'none'}} varient='outline-light' className='mt-2 mb-2'> Add to Cart</button>

                            <img style={{width: "60px"}} src={element.delimg} className='laimg' alt=""/>
                            </div>  
                            </div>
                        </div>
                    </Card>

                  </>
                )
              })
            }

          </div>
        </section>
    </>
  )
}

export default Home