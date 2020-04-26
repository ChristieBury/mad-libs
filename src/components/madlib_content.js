import React, { Component } from 'react';
 
export default class MadLibContent extends Component {
    render() {
        const data = this.props.data;
        
        return (
            <div className={data.completedForm ?'show-content': 'hide-content'}>
                <div className="content-wrapper">
                    A <b>{this.renderLabel(data.nounOne)}</b> is more powerful than a pair of <b>{this.renderLabel(data.nounTwo)}</b>, but more expensive, and many of the <b>{this.renderLabel(data.adjectiveOne)}</b> ones are of rather of <b>{this.renderLabel(data.adjectiveTwo)}</b> quality. Generally it is better to <b>{this.renderLabel(data.verb)}</b> on a pair of <b>{this.renderLabel(data.nounTwo)}</b> than a cheap <b>{this.renderLabel(data.nounOne)}</b> at the same price, if you have the choice. The <b>{this.renderLabel(data.nounOne)}'s</b> <b>{this.renderLabel(data.nounThree)}</b> can bend the <b>{this.renderLabel(data.nounFour)}</b>. The better <b>{this.renderLabel(data.nounOne)}</b> uses a <b>{this.renderLabel(data.nounFive)}</b> for the same purpose. 
                </div>
            </div>
        );
    }
    renderLabel = function(state) {
        return(
            <span>
                <label className="black-label"></label><b className="bold-text">{state}</b>
            </span>
        );
    };
}