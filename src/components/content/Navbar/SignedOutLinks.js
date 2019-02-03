import React from 'react'
import { NavbarNav, NavItem, NavLink, MDBCollapse, MDBRow, NavbarToggler, Navbar, NavbarBrand, MDBCol, MDBBtn } from "mdbreact";
import fire from '../../config/Fire';


class SignedOutLinks extends React.Component {
    constructor(props) {
        super(props)
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.state = {
            collapseID: "",
            email: "",
            password: ""
        }
    }

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => { }).catch((error) => {
            console.log(error);
        });
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => { }).then((u) => { console.log(u) }).catch((error) => {
            console.log(error)
        })
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
                        {/* <NavItem>
                            <NavLink to="/about">About</NavLink>
                        </NavItem> */}
                    </NavbarNav>
                    <NavbarNav right>
                        <form
                            className="needs-validation"
                            onSubmit={this.submitHandler}
                            noValidate
                        >
                            <MDBRow>
                                <MDBCol md="4" className="mb-3">
                                    <input
                                        value={this.state.email}
                                        name="email"
                                        onChange={this.changeHandler}
                                        type="text"
                                        id="defaultFormRegisterNameEx"
                                        className="form-control"
                                        placeholder="Email"
                                        required
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                </MDBCol>
                                <MDBCol md="4" className="mb-3">
                                    <input
                                        value={this.state.password}
                                        name="password"
                                        onChange={this.changeHandler}
                                        type="password"
                                        id="defaultFormRegisterEmailEx2"
                                        className="form-control"
                                        placeholder="Password"
                                        required
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                </MDBCol>
                                <MDBCol md="4" className="mb-2">
                                    <MDBBtn color="primary" type="submit" size="sm" onClick={this.login}>
                                        Login
                                </MDBBtn>
                                    <MDBBtn color="primary" type="submit" size="sm" onClick={this.signup}>
                                        Register
                                </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </form>
                    </NavbarNav>
                </MDBCollapse>
            </Navbar>

        )
    }
}

export default SignedOutLinks;