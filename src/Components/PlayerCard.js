import React, { Component } from 'react';
import NewPlayer from "./NewPlayer";

export default class PlayerCard extends Component {
    render(){
        let style = this.props.turn ? "border-info": '';
        let form = !this.props.player.isReady && (<NewPlayer
                                                    player = {this.props.player}
                                                    handleSubmitNewPlayer = {this.props.handleSubmitNewPlayer}
                                                 />);
        let card = this.props.player.isReady
               && (<div className={"player-card " + style}>
                        <h3>{this.props.player.name}</h3>
                        <div className="demo-color" style={{backgroundColor: this.props.player.color}}> </div>
                        {this.props.turn && <h4>Your turn</h4>}
                   </div>);
        return(
            <div className="full-height">
                {form}
                {card}
            </div>
        )
    }
}