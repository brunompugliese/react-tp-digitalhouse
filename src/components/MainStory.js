import React, { Component } from 'react';
import data from './data.json';
import OptionBtn from './OptionBtn';
import PreviousChoices from './PreviousChoices';



export default class MainStory extends Component {

    state = {
        counter: 0,
        lastChoice: "",
        counterMax: 7,
        allPrevious: [],
    }

    componentDidUpdate= () => {
            this.state.allPrevious = [...this.state.allPrevious, this.state.lastChoice];
    }

    handleClick = (e) => {

        const btnId = e.target.id; 
        let prevCounter = this.state.counter;
        
        
        if (this.state.counter >= this.state.counterMax) {
            alert("Fin");
        } else if(btnId === "A" && this.state.lastChoice !== "A"){
            this.setState({
                counter: prevCounter+1,
                lastChoice: "A",
            })
        } else if(btnId === "A" && this.state.lastChoice === "A"){
            this.setState({
                counter: prevCounter+2,
            })
        } else if (btnId === "B" && this.state.lastChoice === "A"){
            this.setState({
                counter: prevCounter+3,
                lastChoice: "B",
            })
        } else if (btnId === "B"){
            this.setState({
                counter: prevCounter+2,
                lastChoice: "B",
            })
        }
    }

    render() {
        return (
        <React.Fragment>
            <h1 className="historia">{data[this.state.counter].historia}</h1>
            <div className="opciones">
                <OptionBtn handleFn={this.handleClick} dialogueA={data[this.state.counter].opciones.a} dialogueB={data[this.state.counter].opciones.b}/>
            </div>
            <PreviousChoices lastChoice={this.state.lastChoice} allPrevious={this.state.allPrevious}/>
        </React.Fragment>
        )
    }
}