import React, {Component} from "react";

class ProductsList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            productsList: [
                {title: "Product 1", quantity: 234},
                {title: "Product 2", quantity: 21},
                {title: "Product 3", quantity: 5632},
            ]
        }
    }

    getProductsList = () => {
        let products = this.state.productsList;
        return products.map((product, index) => {
            return <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {product.title}
                <span className="badge badge-primary badge-pill">{product.quantity}</span>
            </li>
        });
    }

    render() {
        return <ul className="list-group">
            {this.getProductsList()}
        </ul>
    }
}

export default ProductsList;