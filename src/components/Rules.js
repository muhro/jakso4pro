import React from 'react'
import Button from 'react-bootstrap/Button';
import plus from '../plus.png';
import Modal from 'react-bootstrap/Modal';



class Rules extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      roomName: '',
      show: false
    }


    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      roomName: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createRoom(this.state.roomName)
    this.setState({roomName: ''})
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
          <div className={"rule"}>
            <Button variant="link" className={"rule"} onClick={this.handleShow}>
             <a>OHJEET</a>
            </Button>
          </div>

          <Modal className="tyhja" show={this.state.show} onHide={this.handleClose} >
            <Modal.Header closeButton>
              <Modal.Title> Kysy</Modal.Title>
            </Modal.Header>
            <Modal.Body className="row">

            </Modal.Body>
          </Modal>
        </>
    )
  }
}


export default Rules;