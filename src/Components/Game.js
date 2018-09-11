import React, { Component } from 'react';
import GameFld from "./GameFld";
import PlayerCard from "./PlayerCard";
import NewPlayer from "./NewPlayer";


export default class Game extends Component {
    constructor(props) {
        super(props);

        this.state = this.initState()
    }
    render () {
        return(
            <div id="game">
                <h2>Four In Line</h2>
                {/*<NewPlayer
                    handleSubmitNewPlayer = {this.handleSubmitNewPlayer}
                />*/}
                <div className="row">
                    <PlayerCard
                        player = {this.state.players[0]}
                        turn = {this.state.turn === 0}
                    />
                    <GameFld
                        getPlayerColor={this.getPlayerColor}
                        elements = {this.state.GameFldElements}
                    />
                    <PlayerCard
                        player = {this.state.players[1]}
                        turn = {this.state.turn === 1}
                    />
                </div>
            </div>
        )
    };

    initState = () => {
        let obj = {};
        // Calculate init state of elements
        const cols = 7; // cols of fld
        const rows = 6; // rows of fld
        let GameFldElements = [];
        for(let i = 0; i < rows; i++){
            let row = [];
            for(let j = 0; j < cols; j++){
                row.push({
                    player: ""
                });
            }
            GameFldElements.push(row);
        }
        obj.GameFldElements = GameFldElements;
        // turn property
        obj.turn = 0;
        // default players
        obj.players = [
            {name: "Player 1", color:"#ff0000"},
            {name: "Player 2", color:"#0000ff"}
        ];

        return obj;
    };

    handleSubmitNewPlayer = (newPlayer) => {
        console.log(newPlayer);
    };

    getPlayerColor = (playerIndex) => {
        return this.state.players[playerIndex] !== undefined ? this.state.players[playerIndex].color : '';
    };
}