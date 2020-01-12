import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
class Movies extends Component {

    componentDidMount() {
        this.props.getMovies();
    }

    toggleFavotiteMovie = (movie) => {
        const movieIndex = this.props.favoriteMovies.findIndex(element => element.id === movie.id);

        if(movieIndex !== -1) {
            this.props.removeFavoriteMovie(movieIndex);
        } else {
            this.props.addFavoriteMovie(movie);
        }
    }

    getActiveClass = (movie) => {
        if(this.props.favoriteMovies.findIndex(element => element.id === movie.id) !== -1) {
            return "active";
        }
        return "";
    }

    getMoviesList = () => {
        const movieList = this.props.movies.map((movie, index) => {
            return <li className="list-group-item d-flex justify-content-between" key={movie.id}>
                <span>
                    <i className={"fa fa-star mr-3 favorite-movie " + this.getActiveClass(movie)} 
                        onClick={() => {
                            this.toggleFavotiteMovie(movie);
                        }}></i> 
                    {movie.title}
                </span>
                
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
        movies: state.movies,
        favoriteMovies: state.favoriteMovies
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setMovies: actions.setMovies,
        getMovies: actions.getMovies,
        addFavoriteMovie: actions.addFavoriteMovie,
        removeFavoriteMovie: actions.removeFavoriteMovie
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(Movies);