import React from "react";
import fire from "../../config/Fire";
import SignedOutLinks from "./SignedOutLinks"
import SignedInLinks from "./SignedInLinks"

class NavbarSection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      user: {}
    }
  }

  componentDidMount(){
    this.authListener();
  }


  authListener(){
    fire.auth().onAuthStateChanged((user) =>{
      console.log(user);
      if (user) {
        this.setState({user});
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    })
  }

  render() {
    return (
      <div>
      {this.state.user ? (<SignedInLinks />) : (<SignedOutLinks />)}
      </div>
    );
  }
}

export default NavbarSection;