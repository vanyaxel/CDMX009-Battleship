import React from 'react';
import './button.css';

function Btn(props) {
    return <button className={props.classBtn} ><a className={props.classLink} href={props.route}>{props.name}</a></button>;
}

export default Btn;