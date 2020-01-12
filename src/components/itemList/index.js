import React, {Component} from "react";
import Item from "./item";

class ItemList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            itemLabel: "",
            search: "",
            itemList: [],
            filteredList: []
        }
    }

    handleSearchChange = (e) => {
        const search = e.target.value;

        this.setState({
            search
        }, () => {
            this.updateFilteredList();
        });
    }

    updateFilteredList = () => {
        let filteredList = [];
        const search = this.state.search;
        const itemList = this.state.itemList;

        itemList.forEach((item, index) => {
            if(item.label.indexOf(search) != -1) {
                filteredList.push({
                    label: item.label,
                    index
                });
            }
        });

        this.setState({
            filteredList
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.addItem();
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
            itemList, // когато и стойността и ключа са еднакви, може да го напишем и само веднъж, а не отделно ключ: стойност
            itemLabel: ""
        }, () => {
            this.updateFilteredList();
        });
    }

    removeItem = (index) => {
        let itemList = this.state.itemList;
        itemList.splice(index, 1);

        this.setState({
            itemList
        }, () => {
            this.updateFilteredList();
        });
    }

    handleChange = (event) => {
        this.setState({
            itemLabel: event.target.value
        });
    }

    getListItems = () => {
        let items = this.state.filteredList;

        if(!this.state.itemList.length) {
            return <span>Няма добавени неща</span>
        }
        return items.map((item, index) => {
            //return <li key={index} className="list-group-item">{item.label}</li>
            return <Item 
                key={index} 
                label={item.label}
                removeItem={ () => {
                    this.removeItem(item.index);
                }}
                />
        });
    }

    render() {
        return <>
            <div className="input-group mb-2">
                <input type="text" className="form-control" placeholder="Add ..." value={this.state.itemLabel} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-success" type="button" onClick={this.addItem}><i className="fa fa-plus"></i></button>
                </div>
            </div>

            <div className="input-group mb-2">
                <input type="text" className="form-control" placeholder="Search ..." value={this.state.search} onChange={this.handleSearchChange}/>
            </div>

            <ul className="list-group mt-3">
                {this.getListItems()}
            </ul>
        </>
    }
}

export default ItemList;