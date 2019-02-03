import React from "react"
<<<<<<< HEAD
import {  MDBRow } from "mdbreact"
=======
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from "mdbreact"
>>>>>>> c55af652a60472187323f0428f5df9158c152aa4

function MainResult(props) {
    return (
        <MDBRow>
<<<<<<< HEAD
            <div>
                <h4>{props.title}</h4>
                <p>{props.employer}</p>
                <a target="_blank" rel="noopener noreferrer" href={props.link}><button>Apply!</button></a>
            </div>
=======
            <MDBContainer>
                <MDBRow>
                    <MDBCol size="8">
                        <h4 className="h4">{props.title}</h4>
                        <h6>{props.employer}</h6>
                    </MDBCol>
                    <MDBCol size="4">
                        <MDBBtn href={props.link} className="primary">Apply!</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
>>>>>>> c55af652a60472187323f0428f5df9158c152aa4
        </MDBRow>
    )
}

export default MainResult