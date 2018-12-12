import React, { Component } from 'react';
import './ReactODex.css';
import ReactODexDirectory from './containers/ReactODexDirectory';
import Layout from './hoc/Layout/Layout';



class ReactODex extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <ReactODexDirectory />
        </Layout>
      </div>
    );
  }
}

export default ReactODex;
