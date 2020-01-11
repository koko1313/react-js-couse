import React, {Component} from "react";
import QuantityInput from "../components/quantityInput";
import ListItem from "../components/itemList";

class Home extends Component {

    render() {
        return <div className="row">
            <div className="col-md-8">
                <ListItem/>
            </div>
            <div className="col">
                <QuantityInput/>
                <QuantityInput/>
            </div>
        </div>
    }
}

export default Home;