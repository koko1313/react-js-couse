import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../redux/actions";
import CreateGame from "../components/AddGame";

class Games extends Component {

    componentDidMount() {
        this.props.getGames("_id name description imageUrl price");
    }

    renderGames = () => {
        const gamesList = this.props.games.map(game => {
            return <div key={game._id} className="col-md-4">
                <div className="card">
                    <img src={game.imageUrl} className="card-img-top" alt={game.name} />
                    <div className="card-body">
                        <h5 className="card-title">{game.name}</h5>
                        <div className="card-text">
                            <p>{game.description}</p>
                            <p>Price: {game.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        });

        return gamesList;
    }

    render() {
        return <div className="row"> 
            <div className="col-md-3">
                <CreateGame />
            </div>
            <div className="col-md">
                <div className="row">
                    {this.renderGames()}
                </div>
            </div>
        </div>;
    }
}

const mapStateToProps = state => {
    return {
        games: state.games
    }
}

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        getGames: actions.getGames
    }, dispatch);
}

export default connect(mapStateToProps, mapStateToDispatch)(Games);