import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
class ReduxComponent extends Component {

    componentDidMount() {
        this.props.getMovies();
    }

    getMoviesList = () => {
        const movieList = this.props.movies.map((movie, index) => {
            return <li className="list-group-item d-flex justify-content-between" key={movie.id}>
                {movie.title}
                <span>{movie.releaseYear}</span>
            </li>
        });
        return movieList;
    }

    render() {
        return <ul className="list-group">
            {this.getMoviesList()}
        </ul>
    }
}
const mapStateToProps = state => {
    return {
        movies: state.movies
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setMovies: actions.setMovies,
        getMovies: actions.getMovies
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(ReduxComponent);