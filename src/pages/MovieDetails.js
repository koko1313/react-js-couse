import React, {Component} from "react";
import {withRouter} from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import constants from "../constants";
import moment from "moment";

class MovieDetails extends Component {

    componentDidMount = () => {
        const movieId = this.props.match.params.id;
        this.props.getMovieDetails(movieId);
    }

    render() {
        return <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-fluid" src={constants.basePosterURL + this.props.movieDetails.poster_path} alt="" />
                            </div>
                            <div className="col">
                                <h1>{this.props.movieDetails.title}</h1>
                                <p>{moment(this.props.movieDetails.release_date).format("MMMM Do, YYYY")}</p>
                                <p>{this.props.movieDetails.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        movieDetails: state.movieDetails,
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setMovieDetails: actions.setMovieDetails,
        getMovieDetails: actions.getMovieDetails,
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(withRouter(MovieDetails));