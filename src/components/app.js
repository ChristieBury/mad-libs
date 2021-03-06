import React, { Component } from 'react';
import MadLibForm from './madlib_form';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="backgroundTop">
          <div className="madLibHeading">
            <h1>Mad Libs</h1>
            <div className="madLibTitle">
              <h3>Which is better?</h3>
              </div>
                <div className="direction-wrapper">
                  Fill out the blanks and click the button for the story!
                </div>
          </div>
                <MadLibForm/>
                
        </div>
      </div>
    );
  }
}
