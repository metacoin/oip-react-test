import React, { Component } from 'react';
import {DaemonApi} from 'js-oip';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let api = new DaemonApi();
    const test = async () => {
        let txid = 'cc9a11050acdc4401aec3f40c4cce123d99c0f2c27d4403ae4a2536ee38a4716';
        let {success, error, artifact} = await api.getArtifact(txid);
        return artifact;
    }
    test().then((art) => {console.log('artifact: ', art)}).catch(err => {console.error('err: ', err)})
    
    return (
      <div className="App">
        <header className="App-header">
        Hello world!
        </header>
      </div>
    );
  }
}

export default App;
