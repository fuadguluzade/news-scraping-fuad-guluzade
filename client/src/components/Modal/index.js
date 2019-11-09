import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap';
import Comments from './../Comments';

export default (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Leave a comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Comments newsId={props.newsId}/>
                <Form.Group controlId="form.Textarea">
                    <Form.Label>Your comment</Form.Label>
                    <Form.Control as="textarea" rows="3" onChange={props.handleChange}/>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
            </Button>
                <Button variant="primary" onClick={() => {props.handleSubmitComment(props.newsId, props.comment)}}>
                    Submit
            </Button>
            </Modal.Footer>
        </Modal>
    )
}