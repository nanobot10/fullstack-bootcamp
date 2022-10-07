import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { getRandomJoke } from '../services/chuckNorrisService';

const JokePage = () => {

    const [joke, setJoke] = useState('');
    const [liked, setLiked] = useState(0);
    const [notLiked, setNotLiked] = useState(0);
    const [disabled, setDisabled] = useState(false);


    const getJoke = () => {
        getRandomJoke()
            .then((res) => {
                console.log(res);
                setJoke(res.data.value);
                setDisabled(false);
            })
    }

    const countLiked = () => {
        setLiked(liked + 1);
        setDisabled(true);
    }

    const countNotLiked = () => {
        setNotLiked(notLiked + 1);
        setDisabled(true);
    }


    return (
        <div>
            <h1>Chuck Norris Jokes</h1>
            <p> {joke} </p>
            <div className='d-flex justify-content-center align-items-center'>
                <Button variant="contained" color='primary' onClick={getJoke}>Get Random Joke</Button>
                <Button variant="contained" color='secondary' onClick={countLiked} disabled={disabled}>Like</Button>
                <Button variant="contained" color='error' onClick={countNotLiked} disabled={disabled}>Not like</Button>
            </div>
            <p>Liked: {liked}</p>
            <p>Not liked: {notLiked} </p>
        </div>
    );
}

export default JokePage;
