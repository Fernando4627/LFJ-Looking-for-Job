import React from 'react'
import { NavbarNav, NavItem, NavLink, MDBCollapse, MDBRow, NavbarToggler, Navbar, NavbarBrand, MDBCol, MDBBtn } from "mdbreact";
import fire from '../../config/Fire';


<<<<<<< HEAD
const SignedInLinks = () => {
return (
    <ul className="nav">
        <li className="nav-item"><NavLink to='/'>Home</NavLink></li>
        <li className="nav-item"><NavLink to='/'>About</NavLink></li>
        <li className="nav-item"><NavLink to='/'>Contact</NavLink></li>
        <li className="nav-item"><NavLink to='/logout'>Log Out</NavLink></li>
    </ul>
=======
class SignedInLinks extends React.Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this);
        this.state = {
            collapseID: "",
        }
    }

    logout() {
        fire.auth().signOut();
    }

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => { }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <Navbar color="default-color" dark expand="md">
                <NavbarBrand>
                    <img src="/img/lfg.png" className="lfj" />
                </NavbarBrand>
                <NavbarToggler
                    onClick={this.toggleCollapse("navbarCollapse")}
                />
                <MDBCollapse id="navbarCollapse" isOpen={this.state.collapseID} navbar>
                    <NavbarNav left>
                        <NavItem>
                            <NavLink to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/about">About</NavLink>
                        </NavItem>
                    </NavbarNav>
                    <NavbarNav right>
                        <form
                            className="needs-validation"
                            onSubmit={this.submitHandler}
                            noValidate
                        >
                            <MDBRow>
                                <MDBCol md="5" className="mb-3 align-middle">
                                    <h4 className="white-text">Welcome!</h4>
                                </MDBCol>
                                <MDBCol md="4" className="mb-2">
                                    <MDBBtn color="primary" type="submit" size="sm" onClick={this.logout}>
                                        Logout
                                </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </form>
                    </NavbarNav>
                </MDBCollapse>
            </Navbar>

>>>>>>> c55af652a60472187323f0428f5df9158c152aa4
        )
    }
}

export default SignedInLinks;