import React from 'react';
import './App.css';
import axios from 'axios';
import CardContainer from './components/CardContainer';

class App extends React.Component {
  state = {
    myData: []
  }
  
componentDidMount() {
  axios
  //get followers array from Github API
  .get(`https://api.github.com/users/lorenzosimpson`)
  .then(res => {
    console.log(res)
    this.setState({
      myData: res.data
    })
  })
  .catch(err => console.log(err))
axios
  .get(`https://api.github.com/users/lorenzosimpson/followers`)
  .then(res => {
    console.log(res)
  })
}

  render() {
    return (
    <div className="App">
      <CardContainer myData={this.state.myData}/>
    </div>
  );
}
}

export default App;
