import React, {Component} from "react";
import constants from "../../constants";
import moment from "moment";
import {withRouter} from "react-router-dom";

class SingleMovie extends Component {

    showMovieDetails = () => {
        this.props.history.push(`/moviedetails/${(this.props.id)}`);
    }

    render() {
        return <>
            <div className="col-md-6">
                <div className="d-flex flex-md-row flex-column border shadow-sm mb-3 bg-white rounded single-movie">
                    <img className="movie-image" alt="" src={constants.basePosterURL + this.props.poster_path}/>
                    <div className="p-3">
                        <h4>{this.props.title}</h4>
                        <p className="text-muted">{moment(this.props.releaseDate).format("MMMM Do, YYYY")}</p>
                        <div className="mt-3 movie-description">
                            {this.props.overview}    
                        </div>
                        <button className="btn btn-link" onClick={this.showMovieDetails}>More info</button>
                    </div>
                </div>
            </div>
        </>
    }
}

export default withRouter(SingleMovie);