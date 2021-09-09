import React, { Component } from 'react';

export default class OptionBtn extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return ( 
            <div className="opciones">
                <div className="opcion">
                    <button className="botones" id="A" onClick={this.props.handleFn}>A</button>
                    <h2>{this.props.dialogueA}</h2>
                </div>
                <div className="opcion">
                    <button className="botones" id="B" onClick={this.props.handleFn}>B</button>
                    <h2>{this.props.dialogueB}</h2>
                </div>
            </div>
        )
    }
}

