import React, {Component} from 'react'

class FilterObject extends Component {
    constructor () {
        super ();
        this.state = {
            unfilteredPeople: [
                {name: 'Laura', 
                age: 28},
                {name: 'Ann', 
                age: 16, 
                favoriteFood: 'cake'},
                {name: 'Jose', 
                favoriteFood: 'cereal'},
                {name: 'Athena', 
                legs: 4}],
            userInput: '',
            filteredPeople: []
        }
        // this.filterArr = this.filterArr.bind(this);
    }

    updateInput (num) {
        this.setState({userInput: num});
    }

    filterPeople (prop) {
        let people = this.state.unfilteredPeople;
        let filteredPeople = [];
       for (let i = 0; i < people.length; i++) {
           if (people[i].hasOwnProperty(prop)) {
                filteredPeople.push(people[i]);
           }
       }
       this.setState({filteredPeople: filteredPeople});
    }

    render () {
        return (
            <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">Original: {JSON.stringify(this.state.unfilteredPeople)}</span>
            <input className="inputLine" 
            onChange={ (e) => this.updateInput(e.target.value) }>
            </input>
            <button className="confirmationButton"
            onClick={() => this.filterPeople(this.state.userInput)}>Filter</button>
            <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredPeople)}</span>
        </div>
        )
    }
}

export default FilterObject;