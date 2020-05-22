import React from 'react'

const PlayerList = props => {
    const { updateCurrentPlayer, players } = props
    return (
        <div>
            <ul className="collection with-header">
                {players.map(player =>
                    <li key={player._id} className="collection-item">{player.firstName}</li>)}
            </ul>
        </div>
    )
}

export default PlayerList