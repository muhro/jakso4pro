import React from 'react'
import Button from 'react-bootstrap/Button';
import Rule from './Rule'




class Rules extends React.Component {

  constructor(props, context) {
    super(props, context)
      this.handleClick = this.handleClick.bind(this)
      this.state = { visible: false }
    this.state = {
      roomName: '',
      show: false
    }

  }
    handleClick() {
        this.setState(prev => ({ visible: !prev.visible }))
    }


  render () {
    return (
        <>
            <button className={"rule"} type="button" onClick={this.handleClick}>
                {this.state.visible ? 'Ohjeet' : 'Ohjeet'}
            </button>
            <hr />
            <Rule visible={this.state.visible} />
        </>
    )
  }
}


export default Rules;