import React, { Component } from 'react';
import './App.css';
import Cardlist from './components/cardList/cardlist.Components';
import  SearchBox from './components/searchbox/searchbox.Components';

class App extends Component {
  constructor(){
    super();
    this.state = { 
      Monstors:[],
      searchValue: ''
   }
  }
  
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(res => this.setState({Monstors:res}))
}
handleChange=(e) => {
  this.setState({searchValue : e.target.value}) 
}

  render() { 
    const {Monstors,searchValue} = this.state;
    const searchedMonstor = Monstors.filter( m => 
      m.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    return (
      <div className="App">
      <h1>Monstor Roledex</h1>
       <SearchBox 
       handleChange={this.handleChange}
       />
      <Cardlist  
      Monstors={searchedMonstor} />
     </div>
     );
  }
}

export default App;
