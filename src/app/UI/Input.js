import React from 'react';
import {Form} from 'react-bootstrap';

export default function Input(props) {
    return (
        <Form>
  <Form.Group className="mb-3" controlId={props.controlId}>
    <Form.Label>{props.label}</Form.Label>
    <Form.Control type={props.type} placeholder={props.placeholder} onChange={props.onChange}/>
  </Form.Group>
  </Form>
    )
}
