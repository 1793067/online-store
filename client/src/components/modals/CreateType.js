import React, { useContext } from 'react';
import {Modal, Button, Form} from 'react-bootstrap'
import { Context } from '../../index';

const CreateType = ({show, onHide}) => { //show отвечает виден куомпонент или нет, а OnHide - функция скрывающая модальное окн
    
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control 
                        placeholder={"Введите название типа"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
    </Modal>
    )
}

export default CreateType;