import React from 'react';
import axios from 'axios';
import './App.css';
import Display from './Components/Display';

// function App() {
//   return (
//     <div className="App">
//       <Display />
//     </div>
//   );
// }

// export default App;


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          data: res.data
        })
      })
      .catch(err => console.log(err))
  }
  componentWillUnmount() {
    this.setState({
      data: []
    })
  }
  render () {
    return (
      <div>
        <Display data={this.state.data} />
      </div>
    )
  }
}