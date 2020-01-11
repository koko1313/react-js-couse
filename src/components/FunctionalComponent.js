import React from 'react';

// props - параметри (properties)
const FunctionalComponent = props => {
    return <div className="alert alert-secondary">
        <i className="fa fa-cube mr-3"></i>Functional Component Example<br />
        {props.title} <br />
        {props.description}
    </div>
};

export default FunctionalComponent;