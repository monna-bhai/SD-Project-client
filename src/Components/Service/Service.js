import React from 'react';
import { Button, Card } from 'react-bootstrap';
import  {Link } from 'react-router-dom';

const Service = (props) => {
    const {_id, name,catagory,duration,cost, img}=props.realService
    const{ handleDeleteService}=props
return (
   <div>
   <Card style={{ width: '25rem', height:'38rem' }}>
  <Card.Img  variant="top" src={img } height="300" weight="700"  />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Cost- {cost}Tk only</Card.Text>
        <Card.Text>Duration- {duration} day's</Card.Text><Card.Text>Description- {catagory}</Card.Text>
        
        <Button
         onClick={() => handleDeleteService(_id)} 
        variant="primary"
         className='ms-5'>
          
          Delete
          </Button>
          <Link to={`/updateService/${_id}`}>
          <Button variant="primary" className='ms-5'>
            Update
            </Button>
            </Link>
      </Card.Body>
    </Card>
    </div>
    );
};

export default Service;