import React, {Component} from 'react'

class FilterString extends Component {
    constructor () {
        super ();
        this.state = {
            unfilteredArray: ["Hello", "my", "name", "is", "Laura", "?"],
            userInput: '',
            filteredArray: []
        }
    }

    updateInput (num) {
        this.setState({userInput: num});
    }

    filterString (prop) {
        let str = this.state.unfilteredArray;
        let filteredArray = [];
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < str[i].length; j++) {
                if (str[i][j] === prop) {
                    filteredArray.push(str[i])
                }
            }
        }
        this.setState({filteredArray: filteredArray});
    }
    
    render () {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Unfiltered String: { JSON.stringify(this.state.unfilteredArray) }</span>
                <input className="inputLine"
                onChange={ (e) => this.updateInput(e.target.value) }>
                </input>
                <button className="confirmationButton"
                onClick={() => this.filterString(this.state.userInput)}>Filter
                </button>
                <span className="resultsBox filterStringRB">Filtered: { JSON.stringify(this.state.filteredArray) }</span>
            </div>
        )
    }
}

export default FilterString;