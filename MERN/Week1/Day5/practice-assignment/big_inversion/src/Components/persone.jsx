import React, { Component } from 'react'

export default class Persone extends Component {
    constructor(props) {
        super(props)
        this.state ={
        age : this.props.age  // put the age form prors  in the  age in state
        }
    }
            // {/*---------------- method  ti yous it in button ----------*/}
    chageage(){
        this.setState({
        
            age : this.state.age + 1 // using state here not props to add +1 in age 
            
        })

    }
    render() {
    return (
            <div>
                
                {/*---------------- model to chow him in pag ----------*/}
                <h2> {this.props.firstname}{this.props.lastname} </h2>
                 <p>age : {this.state.age}</p> {/*and youse it also to here to sow  */}
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={() => { this.chageage() }}>Birthday Buutton for {this.props.lastname} {this.props.firstname}</button> {/* ---------------------call the method------put the first and laste name in the button ------ */}

            </div>
        )
    }
}
