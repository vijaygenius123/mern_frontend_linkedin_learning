import React from 'react'

const PlayerList = props => {
    const { updateCurrentPlayer, players } = props
    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header"><h4>Players List</h4></li>
                {players.map(player =>
                    <li key={player._id} className="collection-item"
                        onClick={() => updateCurrentPlayer(player)}>
                        {player.firstName}
                    </li>)}
            </ul>
        </div >
    )
}

export default PlayerList