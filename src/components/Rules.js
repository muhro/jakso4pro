import React from 'react'
import Button from 'react-bootstrap/Button';
import Rule from './Rule'
import Modal from 'react-bootstrap/Modal';




class Rules extends React.Component {

  constructor(props, context) {
    super(props, context)
      this.handleClick = this.handleClick.bind(this)
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
      this.state = { visible: false }
    this.state = {
      roomName: '',
      show: false
    }

  }
    handleClick() {
        this.setState(prev => ({ visible: !prev.visible }))
    }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render () {
    return (
        <>
          <Button className="tausta" variant="primary" onClick={this.handleShow}>
            Ohjeet
          </Button>

          <Modal className="tyhja" show={this.state.show} onHide={this.handleClose} >
            <Modal.Header closeButton>
              <Modal.Title>  Ohjeet</Modal.Title>
            </Modal.Header>
            <Modal.Body className="row">


            </Modal.Body>

          </Modal>
        </>
    )
  }
}


export default Rules;