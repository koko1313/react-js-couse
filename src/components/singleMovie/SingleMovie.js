import React, {Component} from "react";

class SingleMovie extends Component {

    render() {
        return <>
            <div className="col-md-6">
                <div className="d-flex flex-md-row flex-column border shadow-sm mb-3 bg-white rounded single-movie">
                    <img className="movie-image" src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"/>
                    <div className="p-3">
                        <h4>Avengers: Infinity War</h4>
                        <p className="text-muted">April 25, 2018</p>
                        <div className="mt-3 movie-description">
                            The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission…
                        </div>
                        <button className="btn btn-link">More info</button>
                    </div>
                </div>
            </div>
        </>
    }
}

export default SingleMovie;