import React, { Component } from 'react';

const greeting = 'Hello Adrian'
const loggin = true;


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>{loggin ? greeting : "not logged in"}</h1>
        
        <h2> this is ur firts React Skeleton</h2>
      </div>
    );
  }
}