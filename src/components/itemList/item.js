import React from 'react';

const Item = props => {
    return <li className="list-group-item">
        {props.title}
    </li>
};

export default Item;