import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RegisterForm from './RegisterForm';

const Register = (props) => {
  const {
    buttonLabel,
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="d-flex align-items-center ml-2">
      <Button color="success" onClick={toggle} className="btn-sm">{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register User</ModalHeader>
        <ModalBody>
            <RegisterForm/>
        </ModalBody>
        <ModalFooter>
          За да използвате максимално услугите на този сайт трябва да сте регистриран потребител.
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Register; 