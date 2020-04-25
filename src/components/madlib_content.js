import React, { Component } from 'react';
 
export default class MadLibContent extends Component {
    render() {
        const data = this.props.data;
        
        return (
            <div className={data.completedForm ?'show-content': 'hide-content'}>
                <div className="content-wrapper">
                    A {data.nounOne} is more powerful than {data.nounTwo}, but more expensive, and many of the {data.adjectiveOne} ones are of rather {data.adjectiveTwo} quality. Generally it is better to {data.verb} a pair of {data.nounTwo} than a cheap {data.nounOne} at the same price, if you have the choice. The refractor {data.nounOne} glass {data.nounThree} refract (or bend) the {data.nounFour}. The reflector {data.nounOne} uses a {data.nounFive} for the same purpose. 
                </div>
            </div>
        );
    }
}