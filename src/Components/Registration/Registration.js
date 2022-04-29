import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <Form className="container w-50 mt-5 bg-light p-5 rounded">
        <h1 className="mb-5">Please Registration</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Link className="text-decoration-none" to="/login">
          <span>All ready register?</span>{" "}
        </Link>
        <br />
        <button className="btn btn-primary mt-3" type="submit">
          Register
        </button>
      </Form>
    </div>
  );
};

export default Registration;
