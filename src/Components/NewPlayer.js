import React, {Component} from 'react';

export default class NewPlayer extends Component {
    constructor (props){
        super(props);

        this.state = this.props.player;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    render () {
        return (
            <div className="new-player position-absolute pop-up">
                <h4>New Player</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <div className="form-row">
                            <label htmlFor="name">Name: </label>
                            <input className="form-control" value={this.state.name} onChange={this.handleChange} type="text" id="name"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="form-row">
                            <label htmlFor="color">Color: </label>
                            <input className="form-control" value={this.state.color} onChange={this.handleChange} type="color" id = "color"/>
                        </div>
                    </div>
                    <button className="btn btn-primary">I'm ready</button>
                </form>
            </div>
        )
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]:event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.name === "" || this.state.color === "#ffffff"){
            alert("Player name is empty or selected color is white. Please, try again.");
        }
        else{
            let newPlayer = this.state;
            newPlayer.isReady = true;
            this.props.handleSubmitNewPlayer(newPlayer);
        }
    };
}