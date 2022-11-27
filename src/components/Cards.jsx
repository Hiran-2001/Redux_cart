import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import Cardsdata from "./CardData";
import './style.css'
import { ADD_TO_CART } from "../Redux/actions/action";
function Cards() {
  const [data] = useState(Cardsdata);

  const dispatch = useDispatch()

  const send=(e)=>{
// console.log(e);
   dispatch(ADD_TO_CART(e))
  }
  return (
    <div className="container mt-3">
      <h2 className="text-center">Taste It</h2>

      <div className="row d-flex justify-content-center align-item-center">
        {data.map((e ,key) => {
          return (
            <>
              <Card style={{ width: "22rem", border:"none" }} className="mx-2 mt-4 card_style">
                <Card.Img variant="top" src={e.imgdata} style={{height:"16rem"}} className="mt-3"/>
                <Card.Body>
                  <Card.Title>{e.rname}</Card.Title>
                  <Card.Text>
                   Price : ₹ {e.price}
                  </Card.Text>
                  <div className="button_div d-flex justify-content-center">

                  <Button onClick={()=>send(e)} className="col-lg-12" variant="primary">Add to Cart</Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
