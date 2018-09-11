import React, { Component } from 'react';
import GameFld from "./GameFld/GameFld";
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
                {this.state.isStartGame && false && <NewPlayer
                    handleSubmitNewPlayer = {this.handleSubmitNewPlayer}
                />}
                <h2>Four In Line</h2>
                <div className="row">
                    <PlayerCard
                        player = {this.state.players[0]}
                        turn = {this.state.turn === 0}
                    />
                    <GameFld
                        getPlayerColor={this.getPlayerColor}
                        elements = {this.state.GameFldElements}
                        handlePlayerTurn = {this.handlePlayerTurn}

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
        obj.cols = 7; // cols of GameFld
        obj.rows = 6; // rows of GameFld
        let GameFldElements = [];
        for(let i = 0; i < obj.rows; i++){
            let row = [];
            for(let j = 0; j < obj.cols; j++){
                row.push({
                    player: ''
                });
            }
            GameFldElements.push(row);
        }
        obj.GameFldElements = GameFldElements;
        // turn property
        obj.turn = Math.round(Math.random());
        // winner property
        obj.winner = "";
        // default players
        obj.players = [
            {name: "Player 1", color:"#ff0000"},
            {name: "Player 2", color:"#0000ff"}
        ];
        // start game property
        obj.isStartGame = true;

        return obj;
    };

    handleSubmitNewPlayer = (newPlayer) => {
        console.log(newPlayer);
    };

    getPlayerColor = (playerIndex) => {
        return this.state.players[playerIndex] !== undefined ? this.state.players[playerIndex].color : '';
    };

    handlePlayerTurn = (row, col) => {
        let elements = this.state.GameFldElements;
        let completeFlag = false;
        for (let i = this.state.rows - 1; i >= 0; --i){
            if(elements[i][col].player === ''){
                elements[i][col].player = this.state.turn;
                completeFlag = true;
                break;
            }
        }
        this.setState({
            GameFldElements:elements
        });



        if(completeFlag){
            this.changeTurn();
        }
        else{
            alert("Invalid turn. The column is full. Please, change other column");
        }
    };

    changeTurn = () => {
        this.setState({
            turn: +!this.state.turn
        });
    };

}