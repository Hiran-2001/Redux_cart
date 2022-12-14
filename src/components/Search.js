import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Cardsdata from './CardData';
function Search({state , setState}) {


  const search=(e)=>{
   
    let getTypedData = e.toLowerCase();

    if (getTypedData === "") {
      setState(Cardsdata)
    }else{
      let storeData = state.filter((ele)=>{
        return ele.rname.toLowerCase().match(getTypedData) 
         })
         setState(storeData)
    }

  }
  // console.log(state);


  return (
    <>
      <div id='search-div' style={{marginTop:"25px" ,height:"3rem"}} className="d-flex , justify-content-center">

      <Form.Control
      style={{width:400,borderRadius:"7px 0px 0px 7px" }}
        type="text"
        id="inputText"
        // aria-describedby="passwordHelpBlock"
        placeholder="Search Here" 
        onChange={(e)=>{search(e.target.value)}}
      />
            <Button style={{borderRadius:"0px 7px 7px 0px", width:"6rem",color:'white'}} variant="danger">Search</Button>
      </div>

    </>
  )
}

export default Search

