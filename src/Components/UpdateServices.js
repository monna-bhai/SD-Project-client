import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { json, useParams } from 'react-router-dom'

const UpdateService = () => {
  const { serviceId } = useParams()
  const [service, setService] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data))
  }, [])

  const handleNameChange = (e) => {
    const updatedName = e.target.value
    const updatedService = {
      name: updatedName,
      cost: service.cost,
      img: service.img,
      duration: service.duration,
    }
    setService(updatedService)
  }
  const handlecostChange = (e) => {
    const updatedcost = e.target.value
    const updatedService = {
      name: service.name,
      cost: updatedcost,
      img: service.img,
      duration: service.duration,
    }
    setService(updatedService)
  }
  const handleDurationChange = (e) => {
    const updatedDuration = e.target.value
    const updatedService = {
      name: service.name,
      cost: service.cost,
      duration: updatedDuration,
      img: service.img,
      
    }
    setService(updatedService)
  }
  const handleImageChange = (e) => {
    const updatedImg = e.target.value
    const updatedService = {
      name: service.name,
      cost: service.cost,
      img: updatedImg,
      duration: service.duration,
    }
    setService(updatedService)
  }

  const handleUpdateService = (e) => {
    fetch(`http://localhost:5000/services/${serviceId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert('Update Successful')
          setService({})
        }
      })

    e.preventDefault()
  }

  return (
    <div>
      <Form onSubmit={handleUpdateService}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service Name</Form.Label>
          <Form.Control
            type="text"
            value={service.name || ''}
            onChange={handleNameChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service cost</Form.Label>
          <Form.Control
            type="text"
            value={service.cost || ''}
            onChange={handlecostChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service Duration</Form.Label>
          <Form.Control
            type="text"
            value={service.duration || ''}
            onChange={handleDurationChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service Image</Form.Label>
          <Form.Control
            type="text"
            value={service.img || ''}
            onChange={handleImageChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  )
}

export default UpdateService