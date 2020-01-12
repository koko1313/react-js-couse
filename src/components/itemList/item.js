import React from 'react';

const Item = props => {
    // justify-content-between - ако има 2 items, единия е в ляво, другия вдясно
    // align-items-center - вертикално подравняване
    return <li className="list-group-item d-flex justify-content-between align-items-center">
        {props.label}
        <i className="fa fa-times-circle text-danger remove-list-item" onClick={props.removeItem}></i>
    </li>
};

export default Item;