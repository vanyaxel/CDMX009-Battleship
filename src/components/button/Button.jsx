import React from 'react';
import './button.css';

function Btn(props) {
    return <button className={props.classBtn} onClick={props.click}><a className={props.classLink} href={props.route} >{props.name}</a></button>;
}

export default Btn;