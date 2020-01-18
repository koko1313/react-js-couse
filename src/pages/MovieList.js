import React, {Component} from "react";
import SingleMovie from "../components/singleMovie/SingleMovie";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";

class MovieList extends Component {

    componentDidMount(){
        this.props.getMdTopRatedMovies();
    }
    // this.props.movieDatabaseMovies
    //TODO 
    // 1. write a function that will return component SingleMovie for each
    // element in this.props.movieDatabaseMovies

    // 2. Refactor SingleMovie to consume dynamic props:
    // title, poster_path, release_date, overview, id, ...

    getMovieList = () => {
        const movieList = this.props.movieDatabaseMovies.map((movie) => {
            return <SingleMovie 
                key={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                releaseDate={movie.release_date}
                overview={movie.overview}
                id={movie.id}/>
        });
        return movieList;
    }

    render() {
        return <div className="row">
            {this.getMovieList()}
        </div>
    }
}

const mapStateToProps = state => {
    return {
        movieDatabaseMovies: state.movieDatabaseMovies, // в props ще бъде в props.movieDatabaseMovies
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setMdMovies: actions.setMdMovies,
        getMdTopRatedMovies: actions.getMdTopRatedMovies,
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(MovieList);