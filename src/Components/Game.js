import React, { Component } from 'react';
import GameFld from "./GameFld/GameFld";
import PlayerCard from "./PlayerCard";

export default class Game extends Component {
    constructor(props) {
        super(props);

        this.state = this.initState()
    }

    render () {
        let status = this.handleStatusOfGame();
        let reset = this.handleEndOfGame() && <button className="btn btn-primary" onClick={this.newGame}>New Game</button>;

        return(
            <div id="game">
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
                <div className="row">
                    <div className="col">
                        <h3>
                            {status}
                        </h3>
                        {reset}
                    </div>
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
        // full flag
        obj.isFull = false;

        return obj;
    };
    //
    getPlayerColor = (playerIndex) => {
        return this.state.players[playerIndex] !== undefined ? this.state.players[playerIndex].color : '';
    };

    handleSubmitNewPlayer = (newPlayer) => {
        console.log(newPlayer);
    };
    //
    handlePlayerTurn = (row, col) => {
        if(this.handleEndOfGame()){
            return;
        }
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
            this.calculateEmptyFlds();
            this.calculateWinner();
            this.changeTurn();
        }
        else{
            alert("Invalid turn. The column is full. Please, change other column");
        }
    };
    //
    calculateWinner = () => {
        for(let i = 0; i < this.state.rows; i++){
            for(let j = 0; j < this.state.cols; j++){
                let player = this.state.GameFldElements[i][j].player;
                if(player === "")
                    continue;
                // straight
                this.checkCell(player, i, j, -3, 0); // up
                this.checkCell(player, i, j, 3, 0); // down
                this.checkCell(player, i, j, 0, -3); // left
                this.checkCell(player, i, j, 0, 3); // right
                // diagonal
                this.checkCell(player, i, j, -3, -3); // up left
                this.checkCell(player, i, j, 3, -3); // down left
                this.checkCell(player, i, j, -3, 3); // up right
                this.checkCell(player, i, j, 3, 3); // down right
            }
        }
    };
    //
    checkCell = (player, row, col, difRow, difCol) => {
        let count = 0; // because first cell is "ready"
        let stepR = difRow/3; // calculate row step
        let stepC = difCol/3; // calculate col step

        for(let i = 0; i <=3; i++){
            let r = row+stepR*i;
            let c = col+stepC*i;
            // control size of Game Fld
            if(r < 0 || r > (this.state.rows - 1)) continue;
            if(c < 0 || c > (this.state.cols - 1)) continue;

            if(this.state.GameFldElements[row+stepR*i][col+stepC*i].player === player){
                count++;
            }
        }

        if(count === 4){
            this.setState({
               winner:player
            });
        }
    };
    //
    changeTurn = () => {
        if(this.state.winner === ""){
            this.setState({
                turn: +!this.state.turn
            });
        }
    };
    //
    calculateEmptyFlds = () => {
        let count = 0;
        for(let i = 0; i < this.state.rows; i++){
            for(let j = 0; j < this.state.cols; j++){
                if(this.state.GameFldElements[i][j].player === ""){
                    count++;
                }
            }
        }
        this.setState({
           isFull:  count === 0
        });
    };
    //
    handleEndOfGame = () => {
        return this.state.isFull || this.state.winner !== "";
    };
    // Status of Game
    handleStatusOfGame = () => {
        if(this.handleEndOfGame()){
            if(this.state.winner !== ""){
                return this.state.players[this.state.winner].name + ' WINS';
            }
            else{
                return "Draw";
            }
        }
        else{
            return this.state.players[this.state.turn].name + ' turn';
        }
    };
    // Reset Game
    newGame = () => {
         this.setState(
             this.initState()
         );
    }
}