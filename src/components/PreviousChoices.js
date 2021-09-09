import React, { Component } from 'react';

export default class PreviousChoices extends Component {
    
    render() {

        const { lastChoice, allPrevious } = this.props;

        return (
        <div className="recordatorio">
            <h3>Selección anterior: {this.props.lastChoice}</h3>
            <h4>Historial de opciones elegidas: </h4>
            <ul>{
                    this.props.allPrevious.map((choice, i) => {
                        return <li key={i}>{ choice }</li>
                    })
                }
            </ul>
        </div>
        )
    }
}