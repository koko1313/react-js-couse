import React, {Component} from "react";
import Item from "./item";

class ItemList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            itemLabel: "",
            itemList: []
        }
    }

    addItem = () => {
        // ако полето е празно
        if(!this.state.itemLabel) {
            return;
        }

        const item = {
            label: this.state.itemLabel
        }

        let itemList = this.state.itemList;
        
        itemList.push(item);

        this.setState({
            itemList, // когато и стойността и ключа са еднакви, може да го напишем и само веднъж
            itemLabel: ""
        });
    }

    handleChange = (event) => {
        this.setState({
            itemLabel: event.target.value
        });
    }

    getListItems = () => {
        const items = this.state.itemList;
        if(!this.state.itemList.length) {
            return <span>Няма добавени неща</span>
        }
        return items.map((item, index) => {
            //return <li key={index} className="list-group-item">{item.label}</li>
            return <Item key={index} title={item.label}/>
        });
    }

    render() {
        return <>
            <div className="input-group mb-2">
                <input type="text" className="form-control" value={this.state.itemLabel} onChange={this.handleChange}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-success" type="button" onClick={this.addItem}><i className="fa fa-plus"></i></button>
                </div>
            </div>

            <ul className="list-group mt-3">
                {this.getListItems()}
            </ul>
        </>
    }
}

export default ItemList;