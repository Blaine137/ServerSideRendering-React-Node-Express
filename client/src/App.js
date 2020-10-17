import React from 'react';
import Layout from './components/Layout/Layout';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {BrowserRouter} from 'react-router-dom';

class App extends React.Component {

  state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/test');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  
  render(){
    return (
      <BrowserRouter>
  
          <Layout/>
        {this.state.data ? console.log(this.state.data) : console.log('data is null/undefined')}
      </BrowserRouter>
    );
  }

}

export default App;
