import React, { Component } from "react";
import RomanticComedyList from "./RomanticComedyList";
import { connect } from 'react-redux';
import { fetchRComedyRequest } from "../../reducers/romanticComedy/romanticComedyReducer";

class RomanticComedy extends Component {
    state = {
        page: 1
    }
    componentDidMount() {
        this.props.onFetchRComedy({
            page: 1, callback: (err, res) => {
                if (res) {
                    this.setState({ page: this.state.page + 1 });
                }
            }
        });
    }
    fetchMoreData = () => {
        this.props.onFetchRComedy({
            page: this.state.page, callback: (err, res) => {
                if (res) {
                    this.setState({ page: this.state.page + 1 });
                }
            }
        });
    }
    render() {
        return (
            <>
                <RomanticComedyList comedyList={this.props.comedies} fetchMoreData={this.fetchMoreData} page={this.state.page} />
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