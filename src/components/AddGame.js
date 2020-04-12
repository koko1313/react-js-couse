import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {addGame} from '../redux/actions';

const AddGame = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [price, setPrice] = useState(0);

    const dispatch = useDispatch();

    const dispatchAddGame = () => {
        dispatch(addGame(
            {name, description, imageUrl, price}, 
            '_id name description imageUrl price'
        ));
    }

    return <div>
        <div className="form-group">
            <label htmlFor="gameName">Име</label>
            <input type="text" className="form-control" id="gameName" onChange={e => {setName(e.target.value)}} />
        </div>
        <div className="form-group">
            <label htmlFor="gameDescription">Описание</label>
            <input type="text" className="form-control" id="gameDescription" onChange={e => {setDescription(e.target.value)}} />
        </div>
        <div className="form-group">
            <label htmlFor="gameImage">Картинка (URL)</label>
            <input type="text" className="form-control" id="gameImage" onChange={e => {setImageUrl(e.target.value)}} />
            <img src={imageUrl} className="img-fluid mt-2 d-block" alt="" />
        </div>
        <div className="form-group">
            <label htmlFor="gamePrice">Цена</label>
            <input type="number" className="form-control" id="gamePrice" onChange={e => {setPrice(Number(e.target.value))}} />
        </div>
        <button type="button" className="btn btn-primary" onClick={dispatchAddGame}>Добави</button>
    </div>
}

export default AddGame;