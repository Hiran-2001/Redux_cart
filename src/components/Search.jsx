import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Search() {
  return (
    <>
      <div style={{marginTop:"25px"}} className="d-flex , justify-content-center">

      <Form.Control
      style={{width:400 }}
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder="Search Here" 
      />
            <Button  variant="danger">Danger</Button>
      </div>

    </>
  )
}

export default Search

