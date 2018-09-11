import React, {Component} from 'react';
import Cell from "./Cell";

export default class Row extends Component{
    render() {
        return(
            <div className="row">
                {
                    this.props.row.map((cell, index)=>{
                        return <Cell cell={cell} key={"cell-"+index} getPlayerColor={this.props.getPlayerColor}/>
                    })
                }
            </div>
        )
    }
}