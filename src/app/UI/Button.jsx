import React from 'react';
import {Button as Buttons} from 'react-bootstrap';
export default function Button(props){
    return (
        <>
        <Buttons variant={props.variant} onClick={props.onClick} >{props.children}</Buttons>{' '}
        </>
    )
}
