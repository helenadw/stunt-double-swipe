import React, { useState } from 'react';
import Card from './Card';
import data from './workers.json';
import './Dashboard.css';

const Dashboard = () => {
    const profiles = data.workers;

    const [message, setMessage] = useState('');
    const [likedProfiles, setLikedProfiles] = useState([]);
    const [dislikedProfiles, setDislikedProfiles] = useState([]);
    const currentProfile = profiles[profiles.length - 1];

    function handleLike() {
        setLikedProfiles([...likedProfiles, currentProfile]);
        setMessage('Liked');
        profiles.pop();
    }

    function handleDislike() {
        setDislikedProfiles([...dislikedProfiles, currentProfile]);
        setMessage('Disliked');
        profiles.pop();
    }

    const onDropLeft = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.effectAllowed = 'move';
        handleDislike();
    } 

    const onDropRight = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.effectAllowed = 'move';
        handleLike();
    } 

    const onDragStart = (e) => {
        e.dataTransfer.effectAllowed = 'move';
    }

    const onDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <div className="dashboard">
            <div className="dropzone left" draggable onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDropLeft(e)}></div>
            <div className="interactive-column">
                <div className='card-stack'>
                    {profiles.map((item, index) => {
                        return (
                            <li draggable onDragStart={(e) => onDragStart(e, index)} key={index} className="card-list">
                                <Card key={index} props={item} />
                            </li>
                        );
                    })}
                </div>
                <div className='buttons'>
                    <button onClick={handleDislike} className='button dislike'>❌</button>
                    <button onClick={handleLike} className='button like'>✔️</button>
                </div>
                {message ? <h2>Profile {message}</h2> : <h2></h2>}
            </div>
            <div className="dropzone right" draggable onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDropRight(e)}></div>            
        </div>
    );
}

export default Dashboard;