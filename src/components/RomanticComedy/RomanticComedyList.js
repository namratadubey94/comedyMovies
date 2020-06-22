import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";

class RomanticComedyList extends Component {

    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (this.props.page <= 3 && window.innerHeight + Math.round(document.documentElement.scrollTop) === document.scrollingElement.scrollHeight) {
                console.log("page is.......", this.props.page)
                this.props.fetchMoreData();
            }
        });
    }

    render() {
        return (
            <div style={{ width: "80%", margin: "auto", display: "flex" }}>
                <Grid container spacing={3} ref="listScroll">
                    {this.props.comedyList && this.props.comedyList.length > 0 ?
                        this.props.comedyList.map((item, index) => (
                            <Grid item md={4} sm={4} xs={4} key={index}>
                                <img src={process.env.PUBLIC_URL + '/Slices/' + item["poster-image"]} style={{ maxWidth: "100%", width: "100%", height: "auto" }} alt={"hello"} />
                                <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: "center", color: "gray" }}>
                                    {item.name}
                                </Typography>
                            </Grid>
                        )) : "No Data Found"}
                </Grid>
            </div>
        );
    }
}

export default RomanticComedyList;