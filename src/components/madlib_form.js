import React, { Component } from 'react';
import {
    Col,
    Row,
    Card
} from 'reactstrap';

export default class MadLibForm extends Component {
    constructor(props) {
        super(props)

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
    // console.log(props.inputTitle);
    // console.log(`value for input ${props.inputTitle} is: ${event.target.value}`);
    console.log(`value for state ${props.inputTitle} is: ${this.state[props.inputTitle]}`)
     }.bind(this); 
    // console.log('trying to handle change');

 }
    
    render() {
      return (
          <div className="base-wrapper">
            {/* <Card> */}
                <Row className="row-one-wrapper">
                    <Col className='first-box'>
                        <Row>
                        <input placeholder="noun" type="text" onChange={this.handleChange({inputTitle: 'nounOne'})}/>
                        <Col md="12">
                        <div className='input-description'>noun</div>
                        </Col>
                        </Row>
                    </Col>

                    <Col className='first-box'>
                        <Row>
                        <input placeholder="noun" type="text" onChange={this.handleChange({inputTitle: 'nounTwo'})}/>
                        <Col md="12">
                        <div className='input-description'>noun</div>
                        </Col>
                        </Row>
                    </Col>

                    <Col className='first-box'>
                        <Row>
                        <input placeholder="adjective" type="text" onChange={this.handleChange({inputTitle: 'adjectiveOne'})}/>
                        <Col md="12">
                        <div className='input-description'>adjective</div>
                        </Col>
                        </Row>
                    </Col>

                    <Col className='first-box'>
                        <Row>
                        <input placeholder="adjective" type="text" onChange={this.handleChange({inputTitle: 'adjectiveTwo'})}/>
                        <Col md="12">
                        <div className='input-description'>adjective</div>
                        </Col>
                        </Row>
                    </Col>

                    <Col className='first-box'>
                        <Row>
                        <input placeholder="verb" type="text" onChange={this.handleChange({inputTitle: 'verb'})}/>
                        <Col md="12">
                        <div className='input-description'>verb</div>
                        </Col>
                        </Row>
                    </Col>

                    <Col className='first-box'>
                        <Row>
                        <input placeholder="noun" type="text" onChange={this.handleChange({inputTitle: 'nounThree'})}/>
                        <Col md="12">
                        <div className='input-description'>noun</div>
                        </Col>
                        </Row>
                    </Col>

                    <Col className='first-box'>
                        <Row>
                        <input placeholder="noun" type="text" onChange={this.handleChange({inputTitle: 'nounFour'})}/>
                        <Col md="12">
                        <div className='input-description'>noun</div>
                        </Col>
                        </Row>
                    </Col>

                    <Col className='first-box'>
                        <Row>
                        <input placeholder="noun" type="text" onChange={this.handleChange({inputTitle: 'nounFive'})}/>
                        <Col md="12">
                        <div className='input-description'>noun</div>
                        </Col>
                        </Row>
                    </Col>

                </Row>

                <div className='card-wrapper'>
                    <Card >

                    </Card>
                </div>
            {/* </Card> */}
        </div>
      )
    }
  }
