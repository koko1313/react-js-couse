import React, {Component} from "react";
import SingleMovie from "../components/singleMovie/SingleMovie";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";

class MovieList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            primary_release_year: new Date().getFullYear(),
        }
    }

    componentDidMount(){
        this.discoverMovies();
    }

    getYears = () => {
        const availableYears = [];
        for(let i = new Date().getFullYear(); i >= 2000; i--) {
            availableYears.push(i);
        }
        return availableYears;
    }

    getAvailableReleaseYears = () => {
        const availableYearsOptions = this.getYears().map((year) => {
            return <option key={year} value={year}>{year}</option>
        });

        return availableYearsOptions;
    }

    discoverMovies = () => {
        this.props.getMdDiscoverMovies({
            primary_release_year: this.state.primary_release_year,
            // TODO долния ред нещо не е наред
            currentPage: this.props.currentPage
        });
    }

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

    releaseYearOnChange = (e) => {
        this.setState({
            primary_release_year: e.target.value
        }, () => {
            this.discoverMovies(); // извикваме го като callback
        });
    }

    setSelectedPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.discoverMovies();
    }

    getPages = () => {
        const pages = [];
        for(let i = 1; i < this.props.totalPages; i++) {
            pages.push(
                <li key={i} className="page-item"><a className="page-link" href="#" onClick={() => this.setSelectedPage(i)}>{i}</a></li>
            );
        }
        return pages
    }



    render() {
        return <>
            <div className="row mb-5">
                <div className="col">
                    <ul class="pagination">
                        {this.getPages()}
                    </ul>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-md-4">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="release-year">Release Year</label>
                        </div>
                        <select value={this.state.primary_release_year} onChange={this.releaseYearOnChange} className="custom-select" id="release-year">
                            {this.getAvailableReleaseYears()}
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                {this.getMovieList()}
            </div>
        </>
    }
}

const mapStateToProps = state => {
    return {
        // в props.movieDatabaseMovies ще се запише резултата
        // state.movieDatabaseMovies е функцията от reducers, която извикваме
        movieDatabaseMovies: state.movieDatabaseMovies,

        currentPage: state.currentPage,
        totalPages: state.totalPages,
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setMdMovies: actions.setMdMovies,
        setCurrentPage: actions.setCurrentPage,
        getMdTopRatedMovies: actions.getMdTopRatedMovies,
        getMdDiscoverMovies: actions.getMdDiscoverMovies,
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(MovieList);