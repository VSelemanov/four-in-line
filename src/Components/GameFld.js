import React, { Component } from 'react';
import Row from "./Row";
export default class GameFld extends Component{
    render() {
        return(
            <div id='game-fld' className="col-7 border">
                {
                    this.props.elements.map((row, index)=>{
                        return <Row row={row} key={"row-"+index} getPlayerColor={this.props.getPlayerColor}/>
                    })
                }
            </div>
        )
    }
}