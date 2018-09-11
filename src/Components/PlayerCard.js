import React, { Component } from 'react';

export default class PlayerCard extends Component {
    render(){
        return(
            <div className="player-card col">
                <h3>{this.props.player.name}</h3>
                <div className="demo-color" style={{backgroundColor: this.props.player.color}}> </div>
                {this.props.turn && <h4>Your turn</h4>}
            </div>
        )
    }
}