import React from 'react';
import './button.css';

function Btn(props) {
    return <button className='btn-play' ><a className='route' href={props.route}>{props.name}</a></button>;
}

export default Btn;