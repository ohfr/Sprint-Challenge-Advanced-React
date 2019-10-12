import React from 'react';
import axios from 'axios';
import './App.css';
import Display from './Components/Display';
import Nav from './Components/Nav';
// function App() {
//   return (
//     <div className="App">
//       <Display />
//     </div>
//   );
// }

// export default App;


export default class App extends React.Component {
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  fetchData() {
    axios.get('http://localhost:5000/api/players')
    .then(res => {
      if (this._isMounted) {
        this.setState({
          data: res.data
        })
      }
    })
    .catch(err => console.log(err))
  }
  componentDidMount() {
    this._isMounted = true;
    this.fetchData();
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render () {
    return (
      <div>
        <Nav />
        <Display data={this.state.data} />
      </div>
    )
  }
}