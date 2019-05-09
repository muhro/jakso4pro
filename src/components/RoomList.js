import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};


class RoomList extends React.Component {

  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };


  render() {

    const { classes } = this.props


    const orderedRooms = [...this.props.rooms].sort((a, b) => a.id > b.id)
    const sideList = (
        <div className="rooms-list">
          <List>
            <div >
              <ul>
                <h3>Kysymykset</h3>
                {orderedRooms.map(room => {
                  const active = room.id === this.props.roomId ? 'active' : '';
                  return (
                      <li key={room.id} className={"room " + active}>

                        <a
                            onClick={() => this.props.subscribeToRoom(room.id)}
                            href="#">
                          {room.name}
                        </a>
                      </li>
                  )
                })}
              </ul>
            </div>
          </List>
        </div>
    );


    return (
        <div className={"sideBar-left"} >
          <div  >
          <Button  className={"questions"} onClick={this.toggleDrawer('left', true)}>Kysymykset</Button>
          </div>
          <SwipeableDrawer

              open={this.state.left}
              onClose={this.toggleDrawer('left', false)}
              onOpen={this.toggleDrawer('left', true)}
          >
            <div

                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}
            >
              {sideList}
            </div>
          </SwipeableDrawer>



        </div>
    );
  }
}



RoomList.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default RoomList