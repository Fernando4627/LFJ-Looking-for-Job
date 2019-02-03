import React from 'react';
<<<<<<< HEAD
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
=======
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBContainer, MDBRow, MDBCol, Animation } from 'mdbreact';
>>>>>>> c55af652a60472187323f0428f5df9158c152aa4

const AboutUs = () => {
    return (
        <MDBContainer className="pt-5 text-center">
            <MDBRow className="my-3">
                <MDBCol size="12">
                    <h1 className="h1 text-center">We are team Targaryen.</h1>
                    <p>As team names were based on the show Game of Thrones, we of course picked the fiercest. We are young group of aspiring developers that set out to accomplish whatever is thrown our way. Each of us has a Github, so feel free to check us out!</p>
                </MDBCol>
            </MDBRow>
            <MDBRow>
            <Animation type="fadeIn">
            <MDBCol>
                    <MDBCard style={{ width: "15rem" }}>
                        <MDBCardImage className="img-fluid" src="/img/andres.png" waves />
                        <MDBCardBody>
                            <MDBCardTitle>Andres Gonzalez</MDBCardTitle>
                            <MDBBtn href="https://github.com/andresjgonzalez6">Github</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </Animation>
            <Animation type="fadeIn" delay="0.1s">
            <MDBCol>
                    <MDBCard style={{ width: "15rem" }}>
                        <MDBCardImage className="img-fluid" src="/img/fernando.png" waves />
                        <MDBCardBody>
                            <MDBCardTitle>Fernando Aguilar</MDBCardTitle>
                            <MDBBtn href="https://github.com/Fernando4627">Github</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </Animation>
            <Animation type="fadeIn" delay="0.2s">
            <MDBCol>
                    <MDBCard style={{ width: "15rem" }}>
                        <MDBCardImage className="img-fluid" src="/img/gabriel.png" waves />
                        <MDBCardBody>
                            <MDBCardTitle>Gabriel Viveros-Goldammer</MDBCardTitle>
                            <MDBBtn target="_blank" href="https://github.com/ggoldammer">Github</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </Animation>
            <Animation type="fadeIn" delay="0.3s">
            <MDBCol>
                    <MDBCard style={{ width: "15rem" }}>
                        <MDBCardImage className="img-fluid" src="/img/sergio.png" waves />
                        <MDBCardBody>
                            <MDBCardTitle>Sergio Trujillo</MDBCardTitle>
                            <MDBBtn target="_blank" href="https://github.com/SergioT94">Github</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </Animation>




            </MDBRow>
        </MDBContainer>

    )
}

export default AboutUs;