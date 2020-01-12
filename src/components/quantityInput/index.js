import React, {Component} from "react";

class QuantityInput extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            quantity: 5
        }
    }

    decrementQuantity = () => {
        this.setState({
            quantity: this.state.quantity - 1
        });
    }

    incrementQuantity = () => {
        this.setState({
            quantity: this.state.quantity + 1
        });
    }

    getInputClassName = () => {
        if(this.state.quantity < 3) {
            return 'border-danger text-danger';
        }
        if(this.state.quantity > 7) {
            return 'border-success text-success';
        }
        return '';
    }

    render() {
        return <div className="input-group mb-2">
            <div className="input-group-prepend">
                <button className="btn btn-outline-success" type="button" onClick={this.decrementQuantity}><i className="fa fa-minus"></i></button>
            </div>
            <input readOnly type="text" className={"form-control text-center " + this.getInputClassName()} value={this.state.quantity}/>
            <div className="input-group-append">
                <button className="btn btn-outline-success" type="button" onClick={this.incrementQuantity}><i className="fa fa-plus"></i></button>
            </div>
        </div>
    }
}

export default QuantityInput;