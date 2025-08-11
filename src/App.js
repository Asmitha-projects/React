import './App.css';
//import Hello from './components/Hello';
//import Greet from './components/Greet';
import { Component } from 'react';
//import Welcome from './components/Welcome';
import Message from './components/Message';



class App extends Component{
  render(){
    return (
      <div className='App'>
        <Message/>
        {/* <Greet name = "Brute" heroName = "BatMan" > 
          <p>This is children</p>
        </Greet>
        <Greet name = "Clark" heroName = "SuperMan" >
          <button>add</button>
        </Greet>
        <Greet name = "Diana" heroName = "wonderWoman"/>

      <Hello/> 
      <Welcome name = "Brute" heroName = "BatMan"/>
      <Welcome name = "Clark" heroName = "SuperMan"/>
      <Welcome name = "Diana" heroName = "wonderWoman"/> */}

      </div>
       );
  }
}

export default App;
