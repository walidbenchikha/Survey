import React, { Component } from 'react';

class App extends Component {
    render() {
      return (
        <div className="App">
        <h1>walid, helloworld!!!</h1>
          { this.props.children }
        </div>
      );
    }
  }

  export default App;