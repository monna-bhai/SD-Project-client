import React, { useRef } from "react"; 
import { Button, Form } from "react-bootstrap";

const AddService = () => { 
    const nameRaf=useRef()
    const costRaf=useRef()
    const durationRaf=useRef()
    const imgRaf=useRef()

    const handleAddService=(e)=>{
        const name=nameRaf.current.value
        const cost=costRaf.current.value
        const duration=durationRaf.current.value
        const img=imgRaf.current.value
       
const newService={name,cost,duration,img}

fetch('http://localhost:5000/services',{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify(newService),
})
.then(res=>res.json())
.then(data=>{
    if(data.insertId){
        alert('Data is Sucessfully Added in Database')
    }
})
        e.preventDaufalt()
    }
    return(
        <div class="form container mt-5">
           <Form onSubmit={handleAddService}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Service Name</Form.Label>
        <Form.Control ref={nameRaf} type="text" placeholder="Enter Service Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Service Cost</Form.Label>
        <Form.Control  ref={costRaf} type="text" placeholder="Enter Service Cost" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Service Duration</Form.Label>
        <Form.Control  ref={durationRaf} type="text" placeholder="Enter Service Duration" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Service img link</Form.Label>
        <Form.Control  ref={imgRaf} type="text" placeholder="Enter Service img link" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    )
}
export default AddService 