import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import { GiWashingMachine} from 'react-icons/gi'
import { MdLocalLaundryService } from 'react-icons/md'
import CountdownTimer from './Timer/CountdownTimer';
import { useDbUpdate } from '../utilities/firebase';
import {useState} from 'react';

const updateComments = (text1, update) => {
    update({text: text1});
}

const Comment = ( {machines, id} ) => {
    const [text, setText] = useState();
    const [updateTextField1, ] = useDbUpdate("/" + id);

    function handleChange(e) {
        e.preventDefault();
        setText(e.target.value);
      }
    

    return (
        <form>
            <h1 style={{ fontSize: "1.25rem"}}>{machines[id].text}</h1>
            <input type="text" value={text} onChange={handleChange} />
            <button className="button" onClick={()=> updateComments(text, updateTextField1)}>
                Enter
            </button>
            </form>
               
    );
}


export default Comment;