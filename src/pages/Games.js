import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../redux/actions";

class Games extends Component {

    componentDidMount() {
        this.props.getGames("_id name description imageUrl price");
    }

    render() {
        return <div>
            Games
        </div>
    }
}

const mapStateToProps = state => {
    return {
        games:state.games
    }
}

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        getGames: actions.getGames
    }, dispatch);
}

export default connect(mapStateToProps, mapStateToDispatch)(Games);