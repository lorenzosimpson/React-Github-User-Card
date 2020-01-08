import React from 'react';
import './App.css';
import axios from 'axios';
import CardContainer from './components/CardContainer';

class App extends React.Component {
  state = {
    myData: [],
    followersData: []
  }
  
componentDidMount() {
  axios
  //get followers array from Github API
  .get(`https://api.github.com/users/lorenzosimpson`)
  .then(res => {
    this.setState({
      myData: res.data
    })
  })
  .catch(err => console.log(err))
axios
  .get(`https://api.github.com/users/lorenzosimpson/followers`)
  .then(res => {
    this.setState({
      followersData: res.data
    })
  })
}

  render() {
    return (
    <div className="App">
      <CardContainer myData={this.state.myData} followersData={this.state.followersData}/>
    </div>
  );
}
}

export default App;
