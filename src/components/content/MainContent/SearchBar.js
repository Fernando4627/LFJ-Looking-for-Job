import React from "react";
import { Col, FormInline, Button, MDBJumbotron, MDBContainer, Animation } from "mdbreact";
import request from "request"
import MainResult from "./MainResult"
import NotLoaded from "./NotLoaded"

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            location: '',
            isLoaded: false,
            jobIndex: []
        }
    }

    handleInput = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value }, () => console.log(this.state))
    }

    handleSubmit = event => {
        event.preventDefault();

        request({
            url: `https://data.usajobs.gov/api/search?keyword=${this.state.query}&locationname=${this.state.location}`,
            method: 'GET',
            headers: {
                "Host": process.env.REACT_APP_HOST,
                "User-Agent": process.env.REACT_USER_AGENT,
                "Authorization-Key": process.env.REACT_APP_USA_KEY
            }
        }, (error, response, body) => {
            var data = JSON.parse(body);
            console.log(data);

            this.setState({
                isLoaded: true,
                jobIndex: data.SearchResult.SearchResultItems
            })
            console.log(this.state.jobIndex)

        }
        )
    }



    render() {
        const jobOutput = this.state.jobIndex.map((job, i) => <Animation type="fadeIn" duration="500ms" delay="0.1s"><MainResult key={i} title={job.MatchedObjectDescriptor.PositionTitle} employer={job.MatchedObjectDescriptor.OrganizationName} link={job.MatchedObjectDescriptor.ApplyURI[0]} /></Animation>)

        return (
            <div>
                <MDBJumbotron className="hero" fluid>
                    <MDBContainer>
                        <Animation type="fadeInDown" duration="1s">
                            <h1 className="hero-text text-center h1">LFJ | Looking For Jobs</h1>

                        </Animation>
                        <Animation type="fadeInDown" duration="1s" delay="0.2s">
                            <h2 className="hero-text text-center">Your Job Search Improved.</h2>
                        </Animation>

                        <Col md="12">
                            <FormInline id="form-search" className="md-form mx-auto mb-4">
                                <input
                                    className="form-control mx-auto mr-sm-2"
                                    name="query"
                                    type="text"
                                    placeholder="Search"
                                    aria-label="Search"
                                    id="search-query"
                                    onChange={this.handleInput}
                                />
                                <input
                                    className="form-control mx-auto mr-sm-2"
                                    type="text"
                                    name="location"
                                    placeholder="City/State"
                                    aria-label="City/State"
                                    id="location"
                                    onChange={this.handleInput}
                                />
                                <Button
                                    size="sm"
                                    type="submit"
                                    className="mx-auto"
                                    id="search-button"
                                    onClick={this.handleSubmit}
                                >
                                    Search
</Button>
                            </FormInline>
                        </Col>
                    </MDBContainer>
                </MDBJumbotron>
                <MDBContainer>
                    <Animation type="fadeIn" delay="0.3s">
                        {this.state.isLoaded ? jobOutput : (<NotLoaded />)}
                    </Animation>
                </MDBContainer>
            </div>
        );
    }
}



export default SearchBar;