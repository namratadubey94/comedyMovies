import React, { Component } from "react";
import RomanticComedyList from "./RomanticComedyList";
import { connect } from 'react-redux';
import { fetchRComedyRequest } from "../../reducers/romanticComedy/romanticComedyReducer";
import NavBar from "../common/NavBar";
import { Container } from "@material-ui/core";

class RomanticComedy extends Component {
    state = {
        page: 1,
        search: ""
    }
    componentDidMount() {
        this.props.onFetchRComedy({
            page: this.state.page, callback: (err, res) => {
                if (res) {
                    this.setState({ page: this.state.page + 1 });
                }
            }
        });
    }
    fetchMoreData = () => {
        this.props.onFetchRComedy({
            page: this.state.page, search: this.state.search, callback: (err, res) => {
                if (res) {
                    this.setState({ page: this.state.page + 1 });
                }
            }
        });
    }

    handleSearch = (search) => {
        this.setState({ page: 1 }, () => {

            this.setState({ search: search }, () => {
                this.props.onFetchRComedy({
                    page: this.state.page, search: search, callback: (err, res) => {
                        if (res) {
                            this.setState({ page: this.state.page + 1 }, () => {
                                console.log("new page is.........", this.state.page)
                            });
                        }
                    }
                });
            });
        })
    }

    render() {
        return (
            <>
                <NavBar onSearch={this.handleSearch} />
                <main>
                    <Container style={{ marginTop: 70 }}>
                        <RomanticComedyList comedyList={this.props.comedies} fetchMoreData={this.fetchMoreData} page={this.state.page} />
                    </Container>
                </main>

            </>
        )
    }
}

export default connect(
    state => ({
        comedies: state.romanticComedy.comedies
    }),
    {
        onFetchRComedy: fetchRComedyRequest
    }
)(RomanticComedy);