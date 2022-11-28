import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function CardsDetails() {
  const [data, setData] = useState([]);
  const getData = useSelector((state) => state.cartReducer.carts);
  // console.log(getData);
  const { id } = useParams();
  // console.log(id);

  const compareData = () => {
    let compare = getData.filter((e) => {
      return e.id == id;
    });
    setData(compare);
  };
  console.log(data);

  useEffect(() => {
    compareData();
  }, [id]);
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details page</h2>
        <section className="container mt-3 ">
          <div className="itemsdetails">
            {data.map((ele) => {
              return (
                <>
                <div className="items_img">
                  <img
                    src={ele.imgdata}
                    alt=""
                  />
                </div>
                <div className="details">
                  <Table>
                    <tr>
                      <td>
                        <p>
                          <strong>Restaurant</strong> : {ele.rname}
                        </p>
                        <p>
                          <strong>Price</strong> : ₹ {ele.price}
                        </p>
                        <p>
                          <strong>Dishes</strong> : {ele.address}
                          Mughalai
                        </p>
                        <p>
                          <strong>Total</strong> : ₹ 300
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Rating:</strong>
                          <span
                            style={{
                              background: "green",
                              color: "white",
                              padding: "2px 6px",
                              borderRadius: "5px",
                              marginLeft:"5px"
                            }}
                          >
                             {ele.rating }★
                          </span>
                        </p>
                        <p>
                          <strong>Order Review:</strong>
                          <span>{ele.somedata}</span>
                        </p>
                        <p>
                          <strong>Remove:</strong>
                          <span
                            style={{
                              color: "red",
                              fontSize: "15px",
                              cursor: "pointer",
                            }}
                          >
                            {" "}
                            <i className="fas fa-trash "></i>
                          </span>
                        </p>
                      </td>
                    </tr>
                  </Table>
                </div>
              </>
              )

             
              
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default CardsDetails;
