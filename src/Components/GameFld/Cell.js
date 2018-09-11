import React, {Component} from 'react';

export default class Cell extends Component{
    render() {
        return(
            <div
                className="col game-fld-cell border"
                style={{backgroundColor: this.props.getPlayerColor(this.props.cell.player)}}
                onClick={ () => {this.props.handlePlayerTurn(this.props.rowIndex, this.props.colIndex)}}
            > </div>
        )
    }
}