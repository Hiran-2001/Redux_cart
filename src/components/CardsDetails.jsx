import React from "react";
import Table from "react-bootstrap/Table";

function CardsDetails() {
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details page</h2>
        <section className="container mt-3 ">
          <div className="itemsdetails">
            <div className="items_img">
              <img
                src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"
                alt=""
              />
            </div>
            <div className="details">
              <Table>
                <tr>
                  <td>
                   <p> <strong>Restaurant</strong> : Massala Theory</p>             
                   <p> <strong>Price</strong> : ₹  300</p>             
                   <p> <strong>Dishes</strong> : North Indian, Biriyani, Mughalai</p>             
                   <p> <strong>Total</strong> : ₹  300 </p>             
                  </td>
                  <td>
                    <p><strong>Rating:</strong> <span style={{background:"green", color:"white" , padding:"2px 5px" ,borderRadius:"5px"}}>3.5 ★</span></p>
                    <p><strong>Order Review:</strong> <span >115+ order placed form here recently</span></p>
                    <p><strong>Remove:</strong> <span style={{color:"red", fontSize:"15px" , cursor:"pointer"}}> <i className="fas fa-trash "></i></span></p>
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CardsDetails;
