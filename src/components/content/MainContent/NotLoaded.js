import React from "react"
import { MDBContainer, MDBRow, MDBCol, Animation } from "mdbreact"

class NotLoaded extends React.Component{
    render() {
        return(
            <MDBContainer>
                <MDBRow>
                    <MDBCol size="12">
                        <h2 className="h2 text-center">Search above to view results.</h2>
                        <Animation type="pulse" infinite duration="2s" delay="1s">
                        <img src="/img/lfj-bag.png" className="mx-auto d-block"/>
                        </Animation>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default NotLoaded