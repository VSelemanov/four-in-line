import React, { Component } from 'react';
import Row from "./Row";
export default class GameFld extends Component{
    render() {
        return(
            <div id='game-fld'>
                {
                    this.props.elements.map((row, index)=>{
                        return <Row key={"row-"+index}
                                    row={row}
                                    rowIndex={index}
                                    getPlayerColor={this.props.getPlayerColor}
                                    handlePlayerTurn = {this.props.handlePlayerTurn}
                                />
                    })
                }
            </div>
        )
    }
}