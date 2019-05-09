import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Logout from './views/Logout';
import {getFilesByTag} from './utils/MediaApi';
import Profile from './views/Profile';
import Login from './views/Login';
import Home from './views/Home';
import Nav from './components/Nav';
//import RoomList from './components/RoomList';
//import MessageList from './components/MessageList';
//import SendMessageForm from './components/SendMessageForm';
//import NewRoomForm from './components/NewRoomForm';
//import Chatkit from '@pusher/chatkit-client';
//import {instanceLocator, tokenUrl} from './config';

class App extends React.Component {

    state = {
        user: null,
    };


    /*
    Kun haluaa laittaa toimimaan user.metropoliassa (mun siiinä tlauri)
    * NAV.js vaihda
    * LOGOUT.js vaihda
    * Banner.js vaihda
    *
    *
    *
    *
    *
    *
    *
    * */














    /*componentDidMount() {
      const chatManager = new Chatkit.ChatManager({
        instanceLocator,
        userId: 'hei',
        tokenProvider: new Chatkit.TokenProvider({
          url: tokenUrl,
        }),
      });

      chatManager.connect().then(currentUser => {
        this.currentUser = currentUser;
        this.getRooms();
      }).catch(err => console.log('error on connecting: ', err));
    }

    getRooms() {
      this.currentUser.getJoinableRooms().then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms,
        });
      }).catch(err => console.log('error on joinableRooms: ', err));
    }

    subscribeToRoom(roomId) {
      this.setState({messages: []});
      this.currentUser.subscribeToRoom({
        roomId: roomId,
        hooks: {
          onMessage: message => {
            this.setState({
              messages: [...this.state.messages, message],
            });
          },

        },
      }).then(room => {
        this.setState({
          roomId: room.id,
        });
        this.getRooms();
      }).catch(err => console.log('error on subscribing to room: ', err));
    }

    sendMessage(text) {
      this.currentUser.sendMessage({
        text,
        roomId: this.state.roomId,
      });
    }

    createRoom(name) {
      this.currentUser.createRoom({
        name,
      }).then(room => {
        this.subscribeToRoom(room.id);
      }).catch(err => console.log('error with createRoom: ', err));
    }
    */

    setUser = (user) => {
        getFilesByTag('profile').then((files) => {
            const profilePic = files.filter((file) => {
                let outputFile = null;
                if (file.user_id === this.state.user.user_id) {
                    outputFile = file;
                }
                return outputFile;
            });
            this.setState((prevState) => {
                return {
                    user: {
                        ...prevState.user,
                        profilePic: profilePic[0],
                    },
                };
            });
        });
        this.setState({user});
    };

    setUserLogout = (user) => {
        this.setState({user});
    };

    checkLogin = () => {
        return this.state.user !== null;
    };

    render() {
        return (
            <Router basename='/~lauriaus/projektij4'>
                <div>
                    <Nav checkLogin={this.checkLogin}/>
                    <Route path="/home" render={(props) => (
                        <Home/>
                    )}/>
                    <Route path="/profile" render={(props) => (
                        <Profile {...props} user={this.state.user}/>
                    )}/>

                    <Route exact path="/" render={(props) => (
                        <Login {...props} setUser={this.setUser}/>
                    )}/>

                    <Route path="/logout" render={(props) => (
                        <Logout {...props} setUserLogout={this.setUserLogout}/>
                    )}/>
                    {/*<RoomList
              subscribeToRoom={this.subscribeToRoom}
              rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
              roomId={this.state.roomId}/>
          <MessageList
              roomId={this.state.roomId}
              messages={this.state.messages}/>
          <SendMessageForm
              disabled={!this.state.roomId}
              sendMessage={this.sendMessage}/>
          <NewRoomForm createRoom={this.createRoom}/>
          */}
                </div>
            </Router>
        );
    }
}

export default App;