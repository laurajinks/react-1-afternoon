import React, {Component} from 'react'

class Palindrome extends Component {
    constructor () {
        super ();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    updateInput (num) {
        this.setState({userInput: num});
    }

    testString (prop) {
        let arr1 = prop.split('');
        let arr2 = arr1.splice();
        arr2 = arr2.reverse();
        console.log(arr1)
        console.log(arr2)
        let palindrome = '';
        if (arr1 === arr2) {
            palindrome = 'Yes!'
        } else {
            palindrome = 'No'
        }
        
        this.setState({palindrome: palindrome});
    }

    render () {
        return (
        <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input className="inputLine"
            onChange={ (e) => this.updateInput(e.target.value) }></input>
            <button className="confirmationButton"
            onClick ={() => this.testString(this.state.userInput)}>Test</button>
            <span className="resultsBox">{this.state.palindrome}</span>
        </div>
        )
    }
}

export default Palindrome;