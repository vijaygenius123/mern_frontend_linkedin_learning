import React from 'react'

const Player = props => {
    const { firstName, lastName, email } = props.player;
    return (
        <div className="row">
            <div className="col s6">
                <div className="card">
                    <div className="card-image">
                        <img src="logo512.png" alt="player"></img>
                        <span className="card-title">{firstName} {lastName}</span>
                    </div>
                    <div className="card-content">{email}</div>
                    <div className="card-action"></div>
                </div>
            </div>
        </div>
    )
}

export default Player