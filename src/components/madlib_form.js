import React, { Component } from 'react';
import {
    Col,
    Row,
    Card
} from 'reactstrap';
import _ from 'lodash';

// function MadLibInput(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }

function MadLibInput(props){
    return (
        <Col className='first-box'>
            <Row>
                <input placeholder={props.placeholder} value={props.state} type="text" onChange={props.onChange}/>
                <Col md="10">
                    <div className='input-description'>{props.placeholder}</div>
                </Col>
            </Row>
        </Col>

    )
}

export default class MadLibForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nounOne: '',
            nounTwo: '',
            nounThree:'',
            nounFour:'',
            nounFive:'',
            adjectiveOne:'',
            adjectiveTwo:'',
            verb:''

        }
    }
 handleChange = function(props) {
    return function(event) {
        this.setState({[props.inputTitle]: event.target.value});
    console.log(props.inputTitle);
    console.log(`value for input ${props.inputTitle} is: ${event.target.value}`);
    console.log(`value for state ${props.inputTitle} is: ${this.state[props.inputTitle]}`)
     }.bind(this); 
    // console.log('trying to handle change');

 }
    
    render() {
        this.inputData = [
            {placeholder:'noun', prop: 'nounOne', state: this.state.nounOne},
            {placeholder:'noun', prop: 'nounTwo', state: this.state.nounTwo},
            {placeholder:'adjective', prop: 'adjectiveOne', state: this.state.adjectiveOne},
            {placeholder:'adjective', prop: 'adjectiveTwo', state: this.state.adjectiveTwo},
            {placeholder:'verb', prop: 'verb', state: this.state.verb},
            {placeholder:'noun', prop: 'nounThree', state: this.state.nounThree},
            {placeholder:'noun', prop: 'nounFour', state: this.state.nounFour},
            {placeholder:'noun', prop: 'nounFive', state: this.state.nounFive},
        ]
      return (
          <div className="base-wrapper">
                <Row className="row-one-wrapper">
                  {
                      _.map(this.inputData, (data, indexKey) => {
                        //   console.log(`unique key is ${indexKey}`);
                       return <MadLibInput key={indexKey} 
                    //    index={indexKey + 1} 
                    state={data.state}
                       placeholder={data.placeholder} 
                       onChange={this.handleChange({inputTitle: data.prop})}/>
                   })
                    } 
                </Row>

                <div className='card-wrapper'>
                    <Card >
                {/* <MadLibInput name='Steve'/>
                <MadLibInput name='Chantell'/>
                <MadLibInput name='Cortney'/> */}
                    </Card>
                </div>
            {/* </Card> */}
        </div>
      )
    }
  }
