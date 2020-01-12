import React, {Component} from "react";
import QuantityInput from "../components/quantityInput";
import ItemList from "../components/itemList";

class Home extends Component {

    render() {
        return <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <ItemList/>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <QuantityInput/>
                        <QuantityInput/>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Home;