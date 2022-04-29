import React from "react";
import { Form } from "react-bootstrap";

const Registration = () => {
  return (
    <div>
      <Form className="container w-50 mt-5 bg-light p-5 rounded">
        <h1 className="mb-5">Please Registration</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Registration;
