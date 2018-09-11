import React, {Component} from 'react';
import Cell from "./Cell";

export default class Row extends Component{
    render() {
        return(
            <div className="row">
                {
                    this.props.row.map((cell, index)=>{
                        return <Cell key={"cell-"+index}
                                     cell={cell}
                                     rowIndex={this.props.rowIndex}
                                     colIndex = {index}
                                     getPlayerColor={this.props.getPlayerColor}
                                     handlePlayerTurn = {this.props.handlePlayerTurn}
                               />
                    })
                }
            </div>
        )
    }
}