import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import Cardsdata from "./CardData";
import "./style.css";
import { ADD_TO_CART } from "../Redux/actions/action";
import Search from "./Search";
import Skeleton from "./SkeletonEffect";
import "./style.css";
function Cards() {
  const [data] = useState(Cardsdata);

  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e);
    dispatch(ADD_TO_CART(e));
  };

  const [carddata, setCarddata] = useState([]);
  // console.log(data);
  useEffect(() => {
    setTimeout(() => {
      setCarddata(Cardsdata);
    }, 500);
  }, []);
  return (
    <div id="card-main" style={{ backgroundColor: "white" }}>

      <div id="title-search" style={{ height: "25rem" }}>

        <h2 style={{marginTop:"4rem", color:"white"}} className="text-center">Taste It</h2>
        <Search state={carddata} setState={setCarddata} />

      </div>
      <div className="container mt-3">
        <div
          id="main"
          className="row d-flex justify-content-center align-items-center"
        >
          {carddata && carddata.length ? (
            carddata.map((e, key) => {
              return (
                <>
                  <Card
                    style={{ width: "22rem", border: "none" }}
                    className="mx-2 mt-4 card_style"
                  >
                    <Card.Img
                      variant="top"
                      src={e.imgdata}
                      style={{ height: "16rem" }}
                      className="mt-3"
                    />
                    <Card.Body>
                      <Card.Title>{e.rname}</Card.Title>
                      <Card.Text>Price : ₹ {e.price}</Card.Text>
                      <div className="button_div d-flex justify-content-center">
                        <Button
                          onClick={() => send(e)}
                          className="col-lg-12"
                          variant="primary"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </>
              );
            })
          ) : (
            <Skeleton count={data} />
          )
          }
        </div>
        {/* <Skeleton count={data}/> */}
      </div>
    </div>
  );
}

export default Cards;
