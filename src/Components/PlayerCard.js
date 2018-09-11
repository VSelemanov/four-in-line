import React, { Component } from 'react';

export default class PlayerCard extends Component {
    render(){
        let style = this.props.turn ? "border-info": '';
        return(
            <div className={"player-card col " + style}>
                <h3>{this.props.player.name}</h3>
                <div className="demo-color" style={{backgroundColor: this.props.player.color}}> </div>
                {/*{this.props.turn && <h4>Your turn</h4>}*/}
            </div>
        )
    }
}